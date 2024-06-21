import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoaderComponent} from "../../../../shared/components/feedback/loader/loader.component";
import {RequesterService} from "../../../../shared/core/http/requester.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
    selector: 'app-create',
    standalone: true,
    imports: [
        FormsModule,
        LoaderComponent,
        ReactiveFormsModule,
        HttpClientModule
    ],
    templateUrl: './create.component.html',
    styleUrl: './create.component.scss',
    providers: [RequesterService, HttpClient]
})
export class CreateComponent {
    public notemeta: any = {};
    public editedNotemeta: any = {};

    public isBtnLoading: boolean = false;

    constructor(
        private requester: RequesterService,
        private toastr: ToastrService
    ) {
        this.generateFakeNote();
    }

    generateFakeNote() {
        this.notemeta = {
            title: '',
            composer: '',
            arranger: '',
            publisher: '',
            style: '',
            grad: 0,
            flex: 0,
            duration: '00:00:00',
            archive_id: 1,
            price: 0.0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_digital: false,
        }

        this.editedNotemeta = Object.assign({}, this.notemeta);
    }

    saveNotemeta() {
        try {
            this.isBtnLoading = true;
            if (this.checkIfDataChanged()) {
                this.toastr.warning('No changes detected!');
                this.isBtnLoading = false;
                return;
            } else {
                this.requester.POST(environment.apis.notemetaAPI, this.editedNotemeta).subscribe((data: any = "") => {
                    this.notemeta = data.data;
                    this.editedNotemeta = Object.assign({}, this.notemeta);
                    this.toastr.success('Data saved successfully');
                    this.isBtnLoading = false;
                }, (err: any) => {
                    console.log(err);
                    this.toastr.error(err.message);
                });
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

