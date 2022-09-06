import { Component } from '@angular/core';
import { AuthenticationService } from './servicce/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AssociationComponent } from './association/association.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faculty-login';

  constructor(public authenticationService:AuthenticationService)
{}

}

