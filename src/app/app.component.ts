import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //this is because angular wont let you use an regular href in an anchor, so you have to route with this instead
  
  onNavigate() {
    window.open("https://docs.google.com/document/d/1YP1scTyrv3Z-voqNcL6EVOPC5KF4vi2nyamLb9ldfQo/edit", "_blank");
  }

  onNavigatenetlify() {
    window.open("https://david-farley-portfolio.netlify.com", "_blank");
  }

  onNavigateVue() {
    window.open("https://vueportfolio-f5902.firebaseapp.com", "_blank");
  }

  title = 'angularportfolio';
  link = "../assets/download.png";
}
