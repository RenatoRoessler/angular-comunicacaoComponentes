import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() cliente: Cliente;
  @Output() updateCliente =  new EventEmitter<Cliente>();
  @Output() removeCliente = new EventEmitter<any>();

  onEdit = false;
  name: string;
  age: number;
  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.onEdit = true;
    this.name = this.cliente.name;
    this.age = this.cliente.age;
  }

  remove() {
    this.removeCliente.emit();
  }

  save() {
    this.onEdit = false;
    this.updateCliente.emit(
      {name: this.name, age: this.age}
    );
  }

}
