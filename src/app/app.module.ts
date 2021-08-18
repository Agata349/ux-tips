import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonaComponent } from './persona/persona.component';
import { HomeComponent } from './home/home.component';
import { AlignmentComponent } from './tips/alignment/alignment.component';
import { ProximityComponent } from './tips/proximity/proximity.component';
import { ConsistencyComponent } from './tips/consistency/consistency.component';
import { ContrastComponent } from './tips/contrast/contrast.component';
import { ColorComponent } from './tips/color/color.component';
import { TypographyComponent } from './tips/typography/typography.component';
import { VisibilityComponent } from './tips/visibility/visibility.component';
import { UnderstandabilityComponent } from './tips/understandability/understandability.component';
import { SimplicityComponent } from './tips/simplicity/simplicity.component';
import { UsersInfoComponent } from './tips/users-info/users-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { DesignSystemComponent } from './design-system/design-system.component';
import { PrototypingComponent } from './prototyping/prototyping.component';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonaComponent,
    HomeComponent,
    AlignmentComponent,
    ProximityComponent,
    ConsistencyComponent,
    ContrastComponent,
    ColorComponent,
    TypographyComponent,
    VisibilityComponent,
    UnderstandabilityComponent,
    SimplicityComponent,
    UsersInfoComponent,
    DesignSystemComponent,
    PrototypingComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
