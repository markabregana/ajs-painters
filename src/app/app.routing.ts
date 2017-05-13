import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppHome } from './components/app.home';
import { AppAboutUs } from './components/app.aboutus';

const appRoutes: Routes = [
    {
        path: '',
        component: AppHome
    },
    {
        path: 'about-us',
        component: AppAboutUs
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
