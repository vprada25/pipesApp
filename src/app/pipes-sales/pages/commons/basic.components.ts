import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent  {

  nameLower: string = "Victor";
  nameUpper: string = "VICTOR";
  nameComplete: string = "Victor Alejandro Prada";


  fecha: Date = new Date();

 

}
