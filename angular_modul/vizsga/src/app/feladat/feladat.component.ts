import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent {

  valasz:string = "";
//primszam vizsgalat
isPrime(str:string):void {
  var answer:boolean = true;
  var num:number = Number(str);
  if (num <= 1) {
      answer = false;
  }
  else {
      for (var i = 2; i <= num / 2 ; i++) {
          if (num % i == 0) {
              answer = false;
              break;
          }
      }
  }
  if (answer == true)
  {        
      this.valasz = 'A szam prim.';
      
  }else{       
      this.valasz = 'A szam nem prim.';       
  }  
}

EredmenyMentes():string[]{
  var eredmeny:string[] = [];
  
  return eredmeny;
}
}


