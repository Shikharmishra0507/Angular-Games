import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorGridComponent } from './color-grid/color-grid.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { GameBarComponent } from './game-bar/game-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBoxComponent } from './core/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorGridComponent,
    ColorBoxComponent,
    GameBarComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
