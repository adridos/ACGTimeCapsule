import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }
  ngOnInit(): void {}
}
