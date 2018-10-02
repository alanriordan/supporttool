
import { JmsListenerComponent } from './jms-listener/jms-listener.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Routes } from '@angular/router';



export const routes: Routes = [
  
  { path: 'userdetails', component: UserDetailsComponent },
  { path: 'listeners', component: JmsListenerComponent },
  { path: '', redirectTo: '/listeners', pathMatch: 'full'  },
];
