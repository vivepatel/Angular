import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";  
  logoUrl: string = "hello-world-angular\src\assets\BL_logo_square_png.png"; // Local image path

  // Method to launch BridgeLabz site in a new tab
  openBridgeLabzSite() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
