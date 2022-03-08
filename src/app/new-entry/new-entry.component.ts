import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//CHILD 

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

  showSuccessMsg: boolean = false;

   userForm = this.formBuilder.group({
      username: '',
      submissionDate: '',
      internSemester: '',
      message:'',
  });

  onSubmit(userForm: { value: any; reset: () => void; }) {
    userForm.reset();
    this.showSuccessMsg = true;
    

  }
  clearSuccessMsg($event: Event) {
    this.showSuccessMsg = false;
  }

  constructor(private formBuilder: FormBuilder,) {}
  ngOnInit(): void {}
}