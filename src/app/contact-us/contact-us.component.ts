import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {

  }

  ngOnInit() {
    this.initFormData();
  }

  initFormData() {
    this.contactUsFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit($event) {
    console.log(JSON.stringify(this.contactUsFormGroup.value));

    if (this.contactUsFormGroup.valid) {

      // TODO: put this into environment specific configuration
      const apiUrlSendEmailContactUs =
        'https://egmwqp0tah.execute-api.ap-southeast-2.amazonaws.com/default/pebble-it-send-email-contact-us';

      this.http.post(apiUrlSendEmailContactUs, this.contactUsFormGroup.value, {
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
