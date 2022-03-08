import { Component, Input, AfterViewInit } from '@angular/core';
import { NewEntryComponent } from '../new-entry/new-entry.component';
//PARENT 
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  
  @Input() username = '';
  @Input() submissionDate = '';
  @Input() internSemester = '';
  @Input() message = '';


}
