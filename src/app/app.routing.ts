import { Routes, RouterModule } from "@angular/router";
import { TemplateComponent } from "./template/template.component";
import { ProfileComponent } from "./profile/profile.component";
import { AllMessagesComponent } from "./all-messages/all-messages.component";
import { HelpmeComponent } from "./helpme/helpme.component";
import { HelpyouComponent } from "./helpyou/helpyou.component";
import { ProfileSettingComponent } from "./profile-setting/profile-setting.component";
import { NotificationsComponent } from "./notifications/notifications.component";



const APP_ROUTES: Routes = [
    { path:'', redirectTo: '/home',pathMatch:'full'},
    { path:'home', component : TemplateComponent},
    { path:'profile',component:ProfileComponent},
    { path:'messages',component:AllMessagesComponent},
    { path:'helpme',component:HelpmeComponent},
    { path:'helpyou',component:HelpyouComponent},
    { path:'profile/setting',component:ProfileSettingComponent},
    { path:'notifications',component:NotificationsComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);