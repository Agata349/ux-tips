import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlignmentComponent } from './tips/alignment/alignment.component';
import { HomeComponent } from './home/home.component';
import { PersonaComponent } from './persona/persona.component';
import { ProximityComponent } from './tips/proximity/proximity.component';
import { ConsistencyComponent } from './tips/consistency/consistency.component';
import { ContrastComponent } from './tips/contrast/contrast.component';
import { ColorComponent } from './tips/color/color.component';
import { TypographyComponent } from './tips/typography/typography.component';
import { VisibilityComponent } from './tips/visibility/visibility.component';
import { UnderstandabilityComponent } from './tips/understandability/understandability.component';
import { SimplicityComponent } from './tips/simplicity/simplicity.component';
import { UsersInfoComponent } from './tips/users-info/users-info.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { PrototypingComponent } from './prototyping/prototyping.component';
import { TestingComponent } from './testing/testing.component';
import { MapsComponent } from './maps/maps.component';
import { DesignThinkingComponent } from './design-thinking/design-thinking.component';
import { ArchitectDesignerComponent } from './information-architecture/architect-designer/architect-designer.component';
import { OverviewComponent } from './information-architecture/overview/overview.component';


const routes: Routes = [
{
  path: 'home', component:HomeComponent
},
  {
  path: 'persona', component:PersonaComponent
},
{
  path: 'alignment', component:AlignmentComponent
},
{
  path: 'proximity', component:ProximityComponent
},
{
  path: 'consistency', component:ConsistencyComponent
},
{
  path: 'contrast', component:ContrastComponent
},
{
  path: 'color', component:ColorComponent
},
{
  path: 'typography', component:TypographyComponent
},
{
  path: 'visibility', component:VisibilityComponent
},
{
  path: 'understandability', component:UnderstandabilityComponent
},
{
  path: 'simplicity', component:SimplicityComponent
},
{
  path: 'users-info', component:UsersInfoComponent
},
{
  path: 'design-system', component:DesignSystemComponent
},
{
  path: 'prototyping', component:PrototypingComponent
},
{
  path: 'testing', component:TestingComponent
},
{
  path: 'maps', component:MapsComponent
},
{
  path: 'design-thinking', component:DesignThinkingComponent
},
{
  path: 'architect-designer', component:ArchitectDesignerComponent
},
{
  path: 'overview', component:OverviewComponent
},
{
  path: '**', redirectTo: 'home'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
