import { Injectable } from '@angular/core';
import {Blog} from '../entity/blog';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogs: Blog[] = [];
  private blogs$: Subject<Blog[]>;

  public getBlogs$(): Observable<Blog[]> {
    return this.blogs$.asObservable();
  }

  constructor(
    private http: HttpClient,
  ) {
    this.blogs$ = new BehaviorSubject<Blog[]>([]);

    this.initializeService();
  }

  initializeService(): void {
    this.loadBlogs().subscribe(
      (newBlogs) => {
        this.blogs = newBlogs;
        this.blogs$.next(newBlogs);
      }, (error: any) => {

      }, () => {

      }
    );
  }


  private loadBlogs() {
    return this.http.get('https://serverlesspebbleit.s3-ap-southeast-2.amazonaws.com/content.json')
      .pipe(
        map((data: any) =>
          data.blogList.map(blog => new Blog(blog.id, blog.title, blog.description, blog.author, blog.date))
        )
      );
  }

  getBlogWithId(id)  {
    return this.blogs.find(aBlog => aBlog.id === id);
  }
}
