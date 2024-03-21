import { Routes } from '@angular/router'

import { EventsListComponent } from './events-list.component'
import { CreateEventComponent } from './create-event.component'

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]