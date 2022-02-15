import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
    newEntryForm = this.formBuilder.group({
    username: '',
    submissionDate:'',
    internSemester:'',
    message:''});


constructor(private formBuilder: FormBuilder,) {  
}
onSubmit(): void{
    //process the new entry
    console.log('your submission has been accepted',this.newEntryForm.value);
    this.newEntryForm.reset();
    
}

  ngOnInit(): void {
  }
}
