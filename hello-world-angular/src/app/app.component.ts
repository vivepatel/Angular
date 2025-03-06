import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = ""; // Stores user input
  message: string = "Hello from BridgeLabz";
  logoUrl: string = "hello-world-angular\src\assets\BL_logo_square_png.png"; // Local image path

  // Method to open BridgeLabz website in a new tab
  openBridgeLabzSite() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
