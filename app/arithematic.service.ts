import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArithematicService {


  constructor() { }
  GetAddition() 
  {
    var Ans: number = 0;
    Ans = 56 + 76
    return Ans;
  }
  GetSubstraction() 
  {
    var Ans: number = 0;
    Ans = 56 - 45
    return Ans;
  }

}
