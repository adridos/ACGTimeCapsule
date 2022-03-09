import { Component, OnInit} from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit  {
  userForm = this.formBuilder.group({
    username: '',
    submissionDate: '',
    internSemester: '',
    message:'',
});

  showSuccessMsg: boolean = false;
  showEntry: boolean = false;

  nameModel:string="";
  dateModel: string="";
  semesterModel:string="";
  messageModel:string="";

  listOfValues=[
    {username: '', submissionDate:'', internSemester:'', message:''}
  ];
 
  onSubmit() {
    this.showSuccessMsg = true;
    this.showEntry = true;
    this.listOfValues.push(this.nameModel, this.dateModel, this.semesterModel, this.messageModel);
    console.log(this.listOfValues);
    this.nameModel='';
  }

  clearSuccessMsg() {
    this.showSuccessMsg = false;
    this.userForm.reset();
  }

  constructor(private formBuilder: FormBuilder,) {}
  ngOnInit() {}
}
