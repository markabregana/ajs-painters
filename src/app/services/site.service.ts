import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


// get site json from view/data/
@Injectable()
export class SiteService{
    constructor(private http: Http){
        //console.log(this.getHeader().subscribe());
    }

    getHeader(){
        return this.http.get('/view/data/site.json')
            .map(res => res.json());
    }
    getHome(){
        return this.http.get('/view/data/home.json')
            .map(res => res.json());
    }
}
