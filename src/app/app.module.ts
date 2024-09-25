import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BubblingTextDirective } from './directives/bubbling-text.directive';
import { VantaComponent } from './components/vanta/vanta.component';
import { TypeDeleteComponent } from './components/type-delete/type-delete.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    BubblingTextDirective,
    VantaComponent,
    TypeDeleteComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
