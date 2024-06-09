import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Danillo';
  age: number = 27;
  hobbies: string[] = ['Pescar', 'Programar', 'Futebol'];
  car = {
    name: 'Polo',
    year: '2022',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
