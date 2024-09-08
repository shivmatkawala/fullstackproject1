import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfodbModule } from './infodb/infodb.module';
import { InfodbRoutingModule } from './infodb/infodb-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfodbModule,
    InfodbRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
