import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Post Your Business', url: '#'},
    { title: 'Change Categories', url: '#' },
    { title: 'Create Business user', url: '#'},
    { title: 'Business Dashboard', url:'#'},
    { title: 'Create QR Code', url: '#'},
    { title: 'ChangePIN', url: '#'},
    { title: 'EditProfile', url: '#'},
    { title: 'Add more Details', url: '#'},
    { title: 'Skipped Items', url: '#'},
    { title: 'List My Business', url: '#'},
    { title: 'Share APP', url: '#'},
    { title: 'Setting', url: '#'},
    { title: 'logout', url: '#'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
