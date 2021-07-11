import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonaComponent } from './persona/persona.component';
import { HomeComponent } from './home/home.component';
import { AlignmentComponent } from './tips/alignment/alignment.component';
import { DesignThinkingComponent } from './design-thinking/design-thinking.component';
import { ProximityComponent } from './tips/proximity/proximity.component';
import { ConsistencyComponent } from './tips/consistency/consistency.component';
import { ContrastComponent } from './tips/contrast/contrast.component';
import { ColorComponent } from './tips/color/color.component';
import { TypographyComponent } from './tips/typography/typography.component';
import { VisibilityComponent } from './tips/visibility/visibility.component';
import { UnderstandabilityComponent } from './tips/understandability/understandability.component';
import { SimplicityComponent } from './tips/simplicity/simplicity.component';
import { UsersInfoComponent } from './tips/users-info/users-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonaComponent,
    HomeComponent,
    AlignmentComponent,
    DesignThinkingComponent,
    ProximityComponent,
    ConsistencyComponent,
    ContrastComponent,
    ColorComponent,
    TypographyComponent,
    VisibilityComponent,
    UnderstandabilityComponent,
    SimplicityComponent,
    UsersInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
