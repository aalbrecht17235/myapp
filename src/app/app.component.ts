import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Hello World how are you?';
  user = {
    name: 'John',
    age: '32',
    id: 0,
    isColored: true
  }

  posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts');

  showUser: boolean = true;


  constructor(private httpService: HttpService) {}

  handleEvent(event: any){
    console.log(event)
  }


  ngOnInit() {
    //this.getPosts();
  }
}

