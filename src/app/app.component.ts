import { Component } from '@angular/core';
import { MessagingService } from "./messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message;
  constructor(private msgService: MessagingService) {}

  ngOnInit(): void {
    this.msgService.getPermission()
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
  }
}
