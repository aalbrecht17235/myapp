import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface UserInterface {
  name: string;
  age: string;
  id: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: UserInterface;

  @Output() userEvent: EventEmitter<UserInterface>;
  isColored: boolean;
  constructor() { 
    this.userEvent = new EventEmitter<UserInterface>();
    this.user = {} as UserInterface
    this.isColored = true;
  }

  ngOnInit(): void {
  }

  sendUserEvent(): void {
    this.userEvent.emit(this.user);
  }

}
