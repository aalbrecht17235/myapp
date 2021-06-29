import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Hello World how are you?';
  user = {
    name: 'John',
    age: '32',
    id: 0
  }
  newDate = new Date()
  
  constructor(private httpService: HttpService) {}

  handleEvent(event: any){
    console.log(event)
  }
}

