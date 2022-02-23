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
    
constructor(private formBuilder: FormBuilder,) {  
  
}
showSuccessMsg: boolean = false;

onSubmit(userForm): void{
    //process the new entry
    console.log('your submission has been accepted',userForm);
    userForm.reset();
    this.showSuccessMsg = true;
}

  ngOnInit(): void {
  }
}
