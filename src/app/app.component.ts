import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'João';
  userData = {
    email: "joao@email.com",
    role: 'Admin',
  }
  title = 'teoria';
}
