import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  title = 'new-entry';
  name: string | undefined;

 
    newEntryForm = this.formBuilder.group({
    name: '',
    submissionDate:'',
    internSemester:'',
    message:''});
    
    //onNameChange(event: Event) {
    //  this.username = (event.target as HTMLInputElement).value;
    //}
    // Place this in HTML name input(input)="onNameChange($any($event.target).value)"
constructor(private formBuilder: FormBuilder,) {  
  
}
onSubmit(userForm): void{
    //process the new entry
    console.log('your submission has been accepted',userForm);
    this.newEntryForm.reset();
      
}

  ngOnInit(): void {
  }
}
