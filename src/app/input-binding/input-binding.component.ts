import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string;
  @Input() lastname: string;
  @Input() age: number;

  clientes: Cliente[];

  constructor() {
    this.clientes = [
      { id: 1, name: 'Bob', age: 30  },
      { id: 2, name: 'Ana', age: 20  },
      { id: 3, name: 'jhon', age: 40  },
      { id: 4, name: 'Maria', age: 30  }
    ];
  }

  ngOnInit() {
  }

}
