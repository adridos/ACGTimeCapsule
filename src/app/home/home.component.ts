import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CardsComponent } from '../cards/cards.component';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends CardsComponent implements OnInit {
  public posts = [];

  userForm = this.formBuilder.group({
    name: '',
    date: '',
    semester: '',
    body: '',
  });
  showNewEntryForm: boolean = true;
  showReEntryForm: boolean = false;

  nameModel: any = "";
  dateModel: any = "";
  semesterModel: any = "";
  messageModel: any = "";
  data: string;

  onSubmit() {
    this.posts.push({ name: this.nameModel, date: this.dateModel, semester: this.semesterModel, body: this.messageModel });
    this._homeService.addPost(this.nameModel, this.dateModel, this.semesterModel, this.messageModel);
    this.nameModel = '';
    this.dateModel = '';
    this.semesterModel = '';
    this.messageModel = '';
    this.showReEntry();
  }
  showReEntry() {
    this.showReEntryForm = true;
    this.showNewEntryForm = false;
  }
  showNewEntry() {
    this.showReEntryForm = false;
    this.showNewEntryForm = true;
  }
  hideAllForms() {
    this.showNewEntryForm = false;
    this.showReEntryForm = false;
  }

  constructor(private formBuilder: FormBuilder, private _homeService: HomeService) {
    super();
  }

  ngOnInit() {
    this._homeService.getPosts().subscribe((data: any) => {
      this.posts = JSON.parse(data.body)
    })
  }
}
