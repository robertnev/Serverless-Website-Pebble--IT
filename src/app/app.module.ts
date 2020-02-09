import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { DownloadComponent } from './download/download.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    DownloadComponent,
    ContactUsComponent,
    SingleArticleComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
