import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  


  contactUsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    
    
   });
    constructor(
      private http: HttpClient,
    ) { }
  
    
    ngOnInit() {
    }
  
    // onSubmit(){
    //   alert(JSON.stringify(this.contactUsForm.value));
    // }
  

  // contactUsFormGroup: FormGroup;

  // constructor(
  //   private fb: FormBuilder,
  //   private http: HttpClient,
  // ) {

  // }

  // ngOnInit() {
  //   this.initFormData();
  // }

  // initFormData() {
  //   this.contactUsFormGroup = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }

  onSubmit($event) {
    console.log(JSON.stringify(this.contactUsForm.value));

   

      // TODO: put this into environment specific configuration
      const apiUrlSendEmailContactUs =
        'https://egmwqp0tah.execute-api.ap-southeast-2.amazonaws.com/default/pebble-it-send-email-contact-us';

        // https://j3pxo8zxi1.execute-api.ap-southeast-2.amazonaws.com/Prod/send-email-contact-us

      this.http.post(apiUrlSendEmailContactUs, this.contactUsForm.value, {
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
