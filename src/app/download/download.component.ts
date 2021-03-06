import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../service/blog.service';
import {Location} from '@angular/common';
import {Blog} from '../entity/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit, OnDestroy {

  // downloadForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.email
  //   ]),
  // });
  downloadForm;
  

  initFormData() {
      this.downloadForm = this.fb.group({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        link: new FormControl('')
      });
    }
    

  blog: Blog;
  
  
  subscriptions: { params? } = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
    public router: Router
  ) {

  }

  goToThankYou()
  {
     this.router.navigate(['/thank-you']);
  }

  ngOnInit() {

    this.subscriptions.params = this.activatedRoute.params.subscribe(params => {
      this.blog = this.blogService.getBlogWithId(params.blogId);
    });

    this.initFormData();
  }

  ngOnDestroy(): void {
    for (const [key, value] of Object.entries(this.subscriptions)) {
      value.unsubscribe();
    }
  }


  

  onSubmit() {
    this.downloadForm.patchValue({link: this.blog.dl_link});
    console.log(JSON.stringify(this.downloadForm.value));
 
      // TODO: put this into environment specific configuration
      const apiUrlSendEmailContactUs =
        'https://cors-anywhere.herokuapp.com/https://jfm8gghmh3.execute-api.ap-southeast-2.amazonaws.com/default/pebble-it-send-download-link';

      this.http.post(apiUrlSendEmailContactUs, this.downloadForm.value, {
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

        setTimeout(() => {
          this.goToThankYou();
      }, 1000
      );

      
    
  }

  doBack() {
    this.location.back();
  }
}

