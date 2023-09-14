import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() contador:number;

  constructor() {
    this.contador=0;
  }

  ngOnInit(): void {
  }

}
