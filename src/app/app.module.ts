import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HelpmePostComponent } from './helpme-post/helpme-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavBarComponent,
    HelpmePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
