import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() changerNumber: EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void{
    this.changerNumber.emit();
  }
}
