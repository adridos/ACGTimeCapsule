import { Component,OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() username = ''; 
  @Input() submissionDate = '';
  @Input() internSemester = '';
  @Input() message = '';

  @Output() nameEvent = new EventEmitter();

  sendName(){
    this.nameEvent.emit(this.username);
  }

  constructor() { }



ngOnInit() {}
}
