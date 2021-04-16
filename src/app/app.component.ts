import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = "Victor Alejandro Prada";
  val: number = 1000;

  obj ={
    name:' victor'
  }


  viewName() {
    console.log(this.name)
    console.log(this.val)
    console.log(this.obj)
  }
}
