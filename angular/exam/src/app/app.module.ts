import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrudModule } from './crud/crud.module';


@NgModule({

  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CrudModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}