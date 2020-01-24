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
    return this.http.get('https://cors-anywhere.herokuapp.com/https://x7cxabjylj.execute-api.ap-southeast-2.amazonaws.com/dev/blogs')
      .pipe(
        map((data: any) =>
          data.Items.map(blog => new Blog(blog.dl_link, blog.id, blog.title, blog.desc, blog.author))
        )
      );
  }

  getBlogWithId(id)  {
    return this.blogs.find(aBlog => aBlog.id === id);
  }
}
