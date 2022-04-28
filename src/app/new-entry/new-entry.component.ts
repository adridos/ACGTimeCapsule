import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PostInterface } from '../post';
@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  public posts = [];

  @Output() newItemEvent = new EventEmitter<string>();
  private _homeService: any;

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }
  onSubmit(userForm: { value: any; reset: () => void; }) {
    userForm.reset();
  }

  add(name: string, date: string, semester: string, body:string): void {
    const newPost: PostInterface = { name, date, semester, body } as PostInterface;
    this._homeService.addPost(newPost).subscribe(post => this.posts.push(post));
  }
  ngOnInit() {}
}