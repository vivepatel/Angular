import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule, NgIf], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = ""; // Stores user input
  message: string = "Hello from BridgeLabz";
  logoUrl: string = "assets/bridgelabz-logo.png"; // Local image path
  errorMessage: string = ""; // Stores validation error

 
  validateUserName() {
    const regex = /^[A-Z][a-zA-Z]{2,}$/; // Must start with uppercase & be at least 3 characters
    if (!regex.test(this.userName)) {
      this.errorMessage = "Name must start with a capital letter and have at least 3 letters!";
    } else {
      this.errorMessage = ""; // Clear error if valid
    }
  }

  
  openBridgeLabzSite() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
