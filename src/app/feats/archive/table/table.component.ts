import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {RequesterService} from "../../../shared/core/http/requester.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Notemeta} from "../../../shared/core/interfaces/notemeta";
import {DatatableComponent} from "./datatable/datatable.component";
import {LoaderComponent} from "../../../shared/components/feedback/loader/loader.component";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [
        HttpClientModule,
        DatatableComponent,
        LoaderComponent,
        MatIcon,
        RouterLink
    ],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
    providers: [RequesterService, HttpClient]
})
export class TableComponent implements OnInit {
    public isLoading: boolean = true;

    public tableData: Notemeta[] = [];
    private tableDataBackup: Notemeta[] = [];

    constructor(
        private route: ActivatedRoute,
        private requester: RequesterService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params);
        });
        this.getTableData();
    }

    public async getTableData() {
        this.isLoading = true;
        await this.requester.GET(environment.apis.notemetaAPI).subscribe((data: any = "") => {
            let result: Notemeta[] = [];
            data.data.forEach((row: Notemeta) => {
                row.arranger = row.arranger === "" ? "unknown" : row.arranger;
                row.composer = row.composer === "" ? "unknown" : row.composer;
                row.duration = row.duration === "" ? "unknown" : row.duration;
                result.push(row);
            });
            this.tableDataBackup = result;
            this.searchTableData(null, true);
            this.isLoading = false;
        }, (err: any) => {
            console.log(err)
        });
    }

    public searchTableData(event: any, isForced: boolean = false) {
        let search: any = null;

        if(isForced){
            search = event;
        }else{
            event.preventDefault();
            search = event.target.value;
        }

        if(search === null || search === undefined){
            search = "";
        }

        search = search.toLowerCase();
        this.isLoading = true;
        if (search === "") {
            this.resetTableData();
        } else {
            this.getAdvancedSearch(search);
        }
        this.isLoading = false;
    }

    private getAdvancedSearch(search: string){
        let results: Notemeta[] = [];
        console.log(search.split(":")[1]);
        this.tableDataBackup.forEach((row: Notemeta) => {
            switch (search.split(":")[0]) {
                case "archiveid":
                    if (row.archive_id.toString().toLowerCase() === search.split(":")[1]) {
                        results.push(row);
                    }
                    break;
                case "title":
                    if (row.title.toLowerCase().includes(search.split(":")[1])) {
                        results.push(row);
                    }
                    break;
                case "arranger":
                    if (row.arranger.toLowerCase().includes(search.split(":")[1])) {
                        results.push(row);
                    }
                    break;
                case "composer":
                    if (row.composer.toLowerCase().includes(search.split(":")[1])) {
                        results.push(row);
                    }
                    break;
                case "style":
                    if (row.style.toLowerCase().includes(search.split(":")[1])) {
                        results.push(row);
                    }
                    break;
                case "publisher":
                    if (row.publisher.toLowerCase().includes(search.split(":")[1])) {
                        results.push(row);
                    }
                    break;
                case "archive_id":
                    if(search.split(":")[1].includes(">")){
                        if(Number(row.archive_id) > parseInt(search.split(":")[1].split(">")[1])){
                            results.push(row);
                        }
                    } else if(search.split(":")[1].includes("<")){
                        if(Number(row.archive_id) < parseInt(search.split(":")[1].split("<")[1])){
                            results.push(row);
                        }
                    } else {
                        if (row.archive_id.toString().toLowerCase() === search.split(":")[1]) {
                            results.push(row);
                        }
                    }
                    break;
                case "grad":
                    if(search.split(":")[1].includes(">")){
                        if(Number(row.grad) > parseInt(search.split(":")[1].split(">")[1])){
                            results.push(row);
                        }
                    } else if(search.split(":")[1].includes("<")){
                        if(Number(row.grad) < parseInt(search.split(":")[1].split("<")[1])){
                            results.push(row);
                        }
                    } else {
                        if (row.grad.toString().toLowerCase() === search.split(":")[1]) {
                            results.push(row);
                        }
                    }
                    break;
                default:
                    if (row.title.toLowerCase().includes(search)
                        || row.composer.toLowerCase().includes(search)
                        || row.arranger.toLowerCase().includes(search)
                        || row.publisher.toLowerCase().includes(search)
                        || row.style.toLowerCase().includes(search)
                        || row.archive_id.toString().toLowerCase().includes(search)) {
                        results.push(row);
                    }
                    break;
            }
        });
        this.tableData = results;
    }

    public resetTableData() {
        this.tableData = this.tableDataBackup;
    }
}
