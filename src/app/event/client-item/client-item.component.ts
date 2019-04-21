import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {

  @Input() title: string;
  @Output() inc = new EventEmitter<number>();



  constructor() { }

  ngOnInit() {
  }

  btnClick(n) {
    this.inc.emit(n);
  }


}
