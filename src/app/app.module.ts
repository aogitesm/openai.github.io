import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Textdavinci003Component } from './textdavinci003/textdavinci003.component';
import { ImagesgenerationComponent } from './imagesgeneration/imagesgeneration.component';
import { Textdavinciedit001Component } from './textdavinciedit001/textdavinciedit001.component';
import { ModerationsComponent } from './moderations/moderations.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Textdavinci003Component,
    ImagesgenerationComponent,
    Textdavinciedit001Component,
    ModerationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
