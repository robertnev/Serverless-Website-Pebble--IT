import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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
      this.http.post('http://me.net', this.contactUsFormGroup.value)
        .subscribe((value) => {}, (error) => {}, () => {});
    }
  }

}
