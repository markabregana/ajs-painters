import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


// get home json from view/data/
@Injectable()
export class HomeService{
    constructor(private http: Http){
        //console.log(this.getHeader().subscribe());
    }

    getContent(){
        return this.http.get('/view/data/home.json')
            .map(res => res.json());
    }
}
