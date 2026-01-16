import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MenuItemCardComponent } from "../menu-item-card/menu-item-card.component";


@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent, FooterComponent,  MenuItemCardComponent,MenuItemCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
