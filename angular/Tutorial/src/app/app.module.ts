import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { AddComponent } from './account/add/add.component';
import { HomeComponent } from './account/home/home.component';
import { ItemComponent } from './account/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    AddComponent,
    HomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
