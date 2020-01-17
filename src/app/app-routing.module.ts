import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {DownloadComponent} from './download/download.component';
import {SingleArticleComponent} from './single-article/single-article.component';


const routes: Routes = [
  { path:  '', redirectTo:  'article-list', pathMatch:  'full' },
  { path:  'article-list', component: ArticleListComponent },
  { path:  'single-article/:blogId', component: SingleArticleComponent },
  { path:  'download/:blogId', component: DownloadComponent },
  { path:  'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
