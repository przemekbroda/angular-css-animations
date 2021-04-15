import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BluredListComponent } from './components/blured-list/blured-list.component';
import { DialogAnimationComponent } from './components/dialog-animation/dialog-animation.component';

const routes: Routes = [
  {path: '', component: DialogAnimationComponent, },
  {path: 'blur', component: BluredListComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
