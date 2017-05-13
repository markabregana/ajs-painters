import { Component } from '@angular/core';
import {Http} from '@angular/http';

// get site json
import { SiteService } from '../services/site.service';
// get home json
import { HomeService } from '../services/home.service';

// set header view
@Component({
    moduleId: module.id,
    selector: 'main-template',
    templateUrl: '/view/templates/app.home.html',
    providers: [SiteService, HomeService]
})
export class AppHome  {
    home: Sites[];
    constructor(private headerService: SiteService){
        this.headerService.getHeader().subscribe(sites => {
            this.home = sites;
        });
    }
}

interface Sites{
    slogan1: string;
    slogan2: string;
}
