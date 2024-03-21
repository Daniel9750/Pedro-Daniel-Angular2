# Creating a Template-based Form
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: This app has a create event form that is not currently wired up. To get to the
form in the application, click the "Create New Event" link on the events list page. Wire up the
form using template-based forms so that the data entered can be saved as a new event. When the save button
is pressed, call `eventService.save()` and pass in the new event to be saved from the data entered on the 
form. After saving the event, send the user to the events list page. The new event should then be visible 
on the events list page. To do this you will need to:

 
1. Wire up the form and form elements using the appropriate bindings into the `create-event.component.html` file:

`create-event.component.html`

```
<div>
  <form #eventForm="ngForm">
    <div class="form-group">
      <label for="event-name">Event Name: </label>
      <input (ngModel)="name" name="name" id="event-name" type="text"/>
    </div>
    <div class="form-group">
      <label for="date">Date: </label>
      <input (ngModel)="date" name="date" id="date" type="text"/>
    </div>
    <div class="form-group">
      <label for="time">Time: </label>
      <input (ngModel)="time" name="time"  id="time" type="text"/>
    </div>
    <div ngModelGroup="location">
      <div class="form-group">
        <label for="address">Address: </label>
        <input (ngModel)="address" name="address" id="address" type="text"/>
      </div>
      <div class="form-group">
        <label for="city">City: </label>
        <input (ngModel)="city" name="city"  id="city" type="text"/>
      </div>
      <div class="form-group">
        <label for="country">Country: </label>
        <input (ngModel)="country" name="country" id="country" type="text"/>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
  </form>
</div>
```


2. Import `FormsModule` from `@angular/forms` into the `app.module.ts` file:

`app.module.ts`

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list.component';
import { CreateEventComponent } from './create-event.component';
import { EventService } from './event.service';
import { appRoutes } from './routes'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent
  ],
  providers: [ EventService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
```


3. Wire up the ngSubmit on the form to the save method on the component and in that method call `eventService.saveEvent` and pass in the new event from the form data. Also, wire up the save method on the component to navigate the user back to the events list page after saving.


`create-event.component.ts`


```
import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { EventService } from './event.service'

@Component({
  selector: 'create-event',
  templateUrl: 'app/create-event.component.html',
  styles: [`
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
  `]
})
export class CreateEventComponent {
  constructor(private eventService:EventService, private router:Router) {
    
  }
  
  saveEvent(event) {
    this.eventService.saveEvent(event)
    this.router.navigate(['/events'])
  }
  
  cancel() {
    this.router.navigate(['/events'])
  }
}
```


`create-event.component.html`

```
<div>
  <form #eventForm="ngForm" (ngSubmit)="saveEvent(eventForm.value)">
    <div class="form-group">
      <label for="event-name">Event Name: </label>
      <input (ngModel)="name" name="name" id="event-name" type="text"/>
    </div>
    <div class="form-group">
      <label for="date">Date: </label>
      <input (ngModel)="date" name="date" id="date" type="text"/>
    </div>
    <div class="form-group">
      <label for="time">Time: </label>
      <input (ngModel)="time" name="time"  id="time" type="text"/>
    </div>
    <div ngModelGroup="location">
      <div class="form-group">
        <label for="address">Address: </label>
        <input (ngModel)="address" name="address" id="address" type="text"/>
      </div>
      <div class="form-group">
        <label for="city">City: </label>
        <input (ngModel)="city" name="city"  id="city" type="text"/>
      </div>
      <div class="form-group">
        <label for="country">Country: </label>
        <input (ngModel)="country" name="country" id="country" type="text"/>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
  </form>
</div>
```
