import { Component, OnInit} from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit  {
  showSuccessMsg: boolean = false;
  showEntry: boolean = false;

  nameModel:string = "";
  listOfNames=[];

   userForm = this.formBuilder.group({
      username: '',
      submissionDate: '',
      internSemester: '',
      message:'',
  });
 
  onSubmit() {
    
    this.showSuccessMsg = true;
    this.showEntry = true;
    this.listOfNames.push(this.nameModel);
    console.log(this.listOfNames);
    this.nameModel='';
  }

  clearSuccessMsg() {
    this.showSuccessMsg = false;
    this.userForm.reset();
  }

  constructor(private formBuilder: FormBuilder,) {}
  ngOnInit() {}
}
