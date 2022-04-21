import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ConfigPosts {
  name: string,
  date: string,
  semester: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://0vhp9yawqd.execute-api.us-east-2.amazonaws.com/dev/post/{id}';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<ConfigPosts>(this.url);
  }

  addPost(name, date, semester, body) {
    this.http.post("https://0vhp9yawqd.execute-api.us-east-2.amazonaws.com/dev/post"
      , {
        "name": name,
        "date": date,
        "semester": semester,
        "body": body
      }).subscribe(res => {
        console.log(res);
      })
  }
}