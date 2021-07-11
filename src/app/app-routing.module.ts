import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlignmentComponent } from './tips/alignment/alignment.component';
import { DesignThinkingComponent } from './design-thinking/design-thinking.component';
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


const routes: Routes = [
  {
  path: 'home', component:HomeComponent
},
  {
  path: 'persona', component:PersonaComponent
},
{
  path: 'design-thinking', component:DesignThinkingComponent
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
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
