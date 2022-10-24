import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {FormsModule} from "@angular/forms";
import {BadgeComponent} from './components/sample/badge/badge.component';
import {MatBadgeModule} from "@angular/material/badge";
import {ButtonComponent} from './components/sample/button/button.component';
import {ButtonToggleComponent} from './components/sample/button-toggle/button-toggle.component';
import {IconsComponent} from './components/sample/icons/icons.component';
import {NavbarComponent} from './components/sample/navbar/navbar.component';
import {ProgressSpinnerComponent} from './components/sample/progress-spinner/progress-spinner.component';
import {SidenavComponent} from './components/sample/sidenav/sidenav.component';
import {TypographyComponent} from './components/sample/typography/typography.component';
import { TitleComponent } from './components/sample/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconsComponent,
    NavbarComponent,
    ProgressSpinnerComponent,
    SidenavComponent,
    TypographyComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
