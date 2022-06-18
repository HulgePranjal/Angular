import { Component, OnInit } from '@angular/core';
import { ArithematicService } from '../arithematic.service';

@Component({
  selector: 'app-demo',
  template: `
  <h2>Addition is :{{operation}}</h2>
  <h2>Substraction is :{{operation2}}</h2>`

})
export class DemoComponent implements OnInit {
  public operation: any = [];
  public operation2: any = [];

  constructor(private _arithematicService: ArithematicService) { }

  ngOnInit(): void {
    this.operation = this._arithematicService.GetAddition();
    this.operation2 = this._arithematicService.GetSubstraction();
  }

}
