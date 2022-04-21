import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CardsComponent } from '../cards/cards.component';
import { ConfigPosts, HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends CardsComponent implements OnInit {
  public posts = [];
  public obj = {};
  configPosts : ConfigPosts| undefined;

  userForm = this.formBuilder.group({
    name: '',
    date: '',
    semester: '',
    body: '',
  });
  showNewEntryForm: boolean = true;
  showReEntryForm: boolean = false;
  showSuccessMsg: boolean = false;

  nameModel: any = "";
  dateModel: any = "";
  semesterModel: any = "";
  messageModel: any = "";
  data: string;

  onSubmit() {
    this.showSuccessMsg = true;
    this.posts.push({ name: this.nameModel, date: this.dateModel, semester: this.semesterModel, body: this.messageModel });
    this.nameModel = '';
    this.dateModel = '';
    this.semesterModel = '';
    this.messageModel = '';
    this.showReEntry();
  }
  showReEntry() {
    this.showReEntryForm = true;
    this.showNewEntryForm = false;
    this._homeService.addPost(this.nameModel, this.dateModel, this.semesterModel,this.messageModel);
  }
  showNewEntry() {
    this.showReEntryForm = false;
    this.showNewEntryForm = true;
    this.showSuccessMsg = false;
  }
  hideAllForms() {
    this.showNewEntryForm = false;
    this.showReEntryForm = false;
  }
  clearSuccessMsg() {
    this.showSuccessMsg = false;
    this.userForm.reset();
  }
  constructor(private formBuilder: FormBuilder, private _homeService: HomeService) {
    super();
  }

  ngOnInit() {
    //this._homeService.getPosts().subscribe(data => this.obj = (data['body']));
   // this.posts.push(JSON.stringify(this.obj));
   this._homeService.getPosts().subscribe((data: any)=>{
    this.posts = JSON.parse(data.body)})
    console.log(this.posts);
}
}
