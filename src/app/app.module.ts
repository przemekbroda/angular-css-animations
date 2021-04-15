import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogAnimationComponent } from './components/dialog-animation/dialog-animation.component';
import { AnimatedDialogComponent } from './components/animated-dialog/animated-dialog.component';
import { BluredListComponent } from './components/blured-list/blured-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogAnimationComponent,
    AnimatedDialogComponent,
    BluredListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
