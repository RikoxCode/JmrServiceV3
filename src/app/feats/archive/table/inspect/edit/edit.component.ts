import {Component} from '@angular/core';
import {LoaderComponent} from "../../../../../shared/components/feedback/loader/loader.component";
import {MatIcon} from "@angular/material/icon";
import {RequesterService} from "../../../../../shared/core/http/requester.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-edit',
    standalone: true,
    imports: [
        LoaderComponent,
        MatIcon,
        HttpClientModule,
        FormsModule
    ],
    templateUrl: './edit.component.html',
    styleUrl: './edit.component.scss',
    providers: [RequesterService, HttpClient]
})
export class EditComponent {
    public notemeta: any = {};
    public editedNotemeta: any = {};

    public isLoading: boolean = true;
    public isBtnLoading: boolean = false;

    constructor(
        private requester: RequesterService,
        private route: ActivatedRoute,
        private toastr: ToastrService
    ) {
        this.route.params.subscribe(params => {
            this.getNotemeta(params['id'])
        });
    }

    private getNotemeta(slug: string) {
        try {
            this.isLoading = true;
            this.requester.GET(environment.apis.notemetaAPI + slug).subscribe((data: any = "") => {
                this.notemeta = data.data;
                this.editedNotemeta = Object.assign({}, this.notemeta);
                this.isLoading = false;
            });
        } catch (error) {
            console.log(error);
            this.toastr.error('Error while fetching data (Reload Page)');
        }
    }

    saveNotemeta() {
        try {
            this.isBtnLoading = true;
            if (this.checkIfDataChanged()) {
                this.toastr.warning('No changes detected!');
                this.isBtnLoading = false;
                return;
            } else {
                this.requester.PUT(environment.apis.notemetaAPI + this.notemeta.slug, this.editedNotemeta)
                    .subscribe(
                        (data: any = "") => {
                            this.notemeta = data.data;
                            this.editedNotemeta = Object.assign({}, this.notemeta);
                            this.toastr.success('Data saved successfully');
                            this.isBtnLoading = false;
                        },
                        (err: any) => {
                            console.log(err);
                            this.toastr.error(err.error.message);
                            this.isBtnLoading = false;
                        }
                    );
            }
        } catch (error) {
            console.log(error);
            this.toastr.error('Error while saving data! Try again later.');
        }
    }

    checkIfDataChanged() {
        return JSON.stringify(this.notemeta) === JSON.stringify(this.editedNotemeta);
    }

    protected readonly window = window;
}
