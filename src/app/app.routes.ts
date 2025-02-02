import { input } from '@angular/core';
import { Routes } from '@angular/router';
import { ComponentInputComponent } from './components/component-input/component-input.component';
import { ForDirectiveComponent } from './components/for-directive/for-directive.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventBindComponent } from './components/event-bind/event-bind.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { ReactiveFormsComponent } from './componrnts/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { RestrictedContentExampleComponent } from './components/restricted-content-example/restricted-content-example.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { authGuard } from './shared/guards/auth.guard';
import { CrudDashboardComponent } from './components/crud/crud-dashboard/crud-dashboard.component';
import { CrudCreateExampleComponent } from './components/crud/crud-create-example/crud-create-example.component';
import { CrudReadExampleComponent } from './components/crud/crud-read-example/crud-read-example.component';
import { CrudUpdateExampleComponent } from './components/crud/crud-update-example/crud-update-example.component';
import { CrudDeleteExampleComponent } from './components/crud/crud-delete-example/crud-delete-example.component';

export const routes: Routes = [
    {path: 'component-input-example', component: ComponentInputComponent},
    {path: 'for-directive-example', component: ForDirectiveComponent},
    {path: 'event-bind-example', component: EventBindComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'component-output-example', component: ComponentOutputExampleComponent },
    {path : 'reactive-forms', component:ReactiveFormsComponent},
    {path: 'template-driven-form', component: TemplateDrivenFormsComponent},
    {path: 'simple-data-table', component:SimpleDatatableComponent},
    {path: '', redirectTo:'/welcome', pathMatch:'full'},
    {path: 'http-client-example', component: HttpClientExampleComponent},
    {path: 'user-registration-example', component: UserRegistrationComponent},
    {path: 'restricted-content-example', component: RestrictedContentExampleComponent, canActivate: [authGuard]},
    {path:'login', component: UserLoginComponent},
    {path: 'crud-example', component: CrudDashboardComponent},
    {path: 'crud-example/create', component: CrudCreateExampleComponent},
    {path: 'crud-example/read', component: CrudReadExampleComponent, canActivate: [authGuard]},
    {path: 'crud-example/update', component: CrudUpdateExampleComponent, canActivate: [authGuard]},
    {path: 'crud-example/delete', component: CrudDeleteExampleComponent, canActivate: [authGuard]},
];