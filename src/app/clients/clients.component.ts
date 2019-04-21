import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string;
  age: number;
  clientes: Cliente[] = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clientes.push(
      { name: this.name, age: this.age}
    );
    this.name = '';
    this.age = 0;
  }

  deleteCliente(i) {
    this.clientes.splice(i, 1)
  }

  updateCliente(c: Cliente  , i) {
    this.clientes[i].name = c.name;
    this.clientes[i].age = c.age;

  }

}
