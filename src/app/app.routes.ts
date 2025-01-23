import { input } from '@angular/core';
import { Routes } from '@angular/router';
import { ComponentInputComponent } from './components/component-input/component-input.component';
import { ForDirectiveComponent } from './components/for-directive/for-directive.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventBindComponent } from './components/event-bind/event-bind.component';

export const routes: Routes = [
    {path: 'component-input-example', component: ComponentInputComponent},
    {path: 'for-directive-example', component: ForDirectiveComponent},
    {path: 'event-bind-example', component: EventBindComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo:'/welcome', pathMatch:'full'}
];
