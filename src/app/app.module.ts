import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HelpmePostComponent } from './helpme-post/helpme-post.component';
import { ProfileComponent } from './profile/profile.component';
import { AllMessagesComponent } from './all-messages/all-messages.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { FormRequestComponent } from './form-request/form-request.component';
import { routing } from './app.routing';
import { HelpyouComponent } from './helpyou/helpyou.component';
import { HelpmeComponent } from './helpme/helpme.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavBarComponent,
    HelpmePostComponent,
    ProfileComponent,
    AllMessagesComponent,
    ProfileSettingComponent,
    FormRequestComponent,
    HelpyouComponent,
    HelpmeComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
