import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Hello World how are you?';
  jsonValue = {
    a: 'hello',
    b: 'world'
  }
  newDate = new Date()
  
  constructor(private httpService: HttpService) {}

  handleEvent(){
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts/1');
  }
}

