import { Component, OnInit} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends CardsComponent implements OnInit  {
  userForm = this.formBuilder.group({
    username: '',
    submissionDate: '',
    internSemester: '',
    message:'',
});
  showNewEntryForm:boolean = true;
  showReEntryForm:boolean = false;
  showSuccessMsg: boolean = false;
  //showEntry: boolean = false;

  nameModel: any ="";
  dateModel: any ="";
  semesterModel: any ="";
  messageModel: any ="";

  posts = [];
 
  onSubmit() {
    this.showSuccessMsg = true;
   // this.showEntry = true;
    this.posts.push({username:this.nameModel,submissionDate:this.dateModel,internSemester:this.semesterModel, message:this.messageModel});
    this.nameModel='';
    this.dateModel='';
    this.semesterModel='';
    this.messageModel= '';

    this.showReEntry();

  }

  showReEntry(){
    this.showReEntryForm=true;
    this.showNewEntryForm=false;
  }

  showNewEntry(){
    this.showReEntryForm=false;
    this.showNewEntryForm=true;
    this.showSuccessMsg=false;
  }
  hideAllForms(){
    this.showNewEntryForm=false;
    this.showReEntryForm=false;
  }

  clearSuccessMsg() {
    this.showSuccessMsg = false;
    this.userForm.reset();
  }

  constructor(private formBuilder: FormBuilder,) {
    super();
  }
  ngOnInit() {}
}
