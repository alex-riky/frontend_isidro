import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './styles-home.css',
})
export class Home {
  nombre: string = 'ALDO ALEXANDER';
  user: any ={
    name: 'Juan Carlos',
    status: true
  }

  frutas = ['banano', 'naranja', 'aguacate', 'tomate'];
}
