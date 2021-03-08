import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Post Your Business', url: '/businessdetails'},
    { title: 'Create QR Code', url: '#'},
    { title: 'Create Digital Visiting Card', url: '#'},
    { title: 'Settings', url: '#'},
    { title: 'Share App', url: '#'},
    { title: 'Logout', url: '#'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
