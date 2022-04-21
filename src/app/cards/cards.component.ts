import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() name = '';
  @Input() date = '';
  @Input() semester = '';
  @Input() body = '';
}
