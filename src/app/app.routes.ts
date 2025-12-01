import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { SingupComponent } from './signup/singup.component';

export const routes: Routes = [
    {path:'about',component: AboutComponent},
    {path:'login', component: LoginComponent},
    {path:'contact', component: ContactComponent},
    {path: '', component: HomeComponent},
    {path:'profile',component: ProfileComponent},
    { path: 'user/:id/:name', component: UserComponent },
    {path: 'signup', component: SingupComponent}
];

