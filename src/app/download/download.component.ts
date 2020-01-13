import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  downloadFormGroup: FormGroup;

  // constructor() { }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {

  }

  ngOnInit() {
    this.initFormData();
  }
  
  initFormData() {
    this.downloadFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit($event) {
    console.log(JSON.stringify(this.downloadFormGroup.value));

    if (this.downloadFormGroup.valid) {

      // TODO: put this into environment specific configuration
      const apiUrlSendEmailContactUs =
        'https://jfm8gghmh3.execute-api.ap-southeast-2.amazonaws.com/default/pebble-it-send-download-link';

      this.http.post(apiUrlSendEmailContactUs, this.downloadFormGroup.value, {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
        .subscribe((value) => {
          console.log(JSON.stringify(value));
        }, (error) => {
          console.log(JSON.stringify(error));
        }, () => {
          console.log('send-email-contact-us API invocation is completed');
        });
    }
  }
}
