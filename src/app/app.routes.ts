import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Assignment1Component } from './assignment-1/assignment-1.component';
import { Assignment2Component } from './assignment-2/assignment-2.component';
import { Assignment3Component } from './assignment-3/assignment-3.component';
import { Assignment4Component } from './assignment-4/assignment-4.component';
import { Assignment5Component } from './assignment-5/assignment-5.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'dashboard',
        component: DashboardComponent,
        children:[
            {
                path: 'assignment_1',
                component: Assignment1Component
            },
            {
                path: 'assignment_2',
                component: Assignment2Component
            },
            {
                path: 'assignment_3',
                component: Assignment3Component
            },
            {
                path: 'assignment_4',
                component: Assignment4Component
            },
            {
                path: 'assignment_5',
                component: Assignment5Component
            },
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
