import { Component } from '@angular/core';
import {Http} from '@angular/http';

// get site json
import { SiteService } from '../services/site.service';

// set header view
@Component({
    moduleId: module.id,
    selector: 'header-template',
    templateUrl: '/view/templates/app.header.html',
    providers: [SiteService]
})
export class AppHeader  {
    sites: Sites[];
    constructor(private headerService: SiteService){
        this.headerService.getHeader().subscribe(sites => {
            this.sites = sites;
        });
    }
}

interface Sites{
    name: string;
    email: string;
    phone: string;
    menus: Menus[];
}
interface Menus{
    id: number;
    url: string;
    title: string;
}
