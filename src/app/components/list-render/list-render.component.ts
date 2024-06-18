import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 10},
    {name: "Tom", type: "Cat", age: 5},
    {name: "Jerry", type: "Mouse", age: 2},
    {name: "Piu-piu", type: "Bird", age: 2},
  ];

  animal: Animal = {name: "Kiko", type: "Cat", age: 4}

  animalDetails = "";

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem  ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log("removendo animal...")
    this.animals = this.listService.remove(this.animals, animal);
  }

}
