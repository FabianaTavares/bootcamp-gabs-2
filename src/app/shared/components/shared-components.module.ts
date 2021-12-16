import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { DirectivesModule } from './../directives/directives.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NotLogComponent } from './not-log/not-log.component';
import { LoggedComponent } from './logged/logged.component';
import { EventCardComponent } from './event-card/event-card.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { RedirectCreateEventComponent } from './redirect-create-event/redirect-create-event.component';
import { RequestLogModalComponent } from './request-log-modal/request-log-modal.component';
import { SingOngsCardComponent } from './sing-ongs-card/sing-ongs-card.component';
import { PipesModule } from '../pipes/pipes.module';
import { BackEndMsgComponent } from './back-end-msg/back-end-msg.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CreateEventModalComponent } from './create-event-modal/create-event-modal.component';

@NgModule({
  declarations: [
    NavBarComponent,
    EventsListComponent,
    NotLogComponent,
    LoggedComponent,
    EventCardComponent,
    CalendarComponent,
    ErrorMsgComponent,
    RedirectCreateEventComponent,
    RequestLogModalComponent,
    SingOngsCardComponent,
    BackEndMsgComponent,
    SignUpModalComponent,
    LoginModalComponent,
    CreateEventModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    NavBarComponent,
    CalendarComponent,
    EventsListComponent,
    SingOngsCardComponent
  ]
})
export class SharedComponentsModule { }
