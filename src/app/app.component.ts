import { Component } from '@angular/core';
import { AppHeader } from './components/app.header';

@Component({
  selector: 'my-app',
  template: `
    <header-template></header-template>
    <router-outlet></router-outlet>
    <footer-template></footer-template>
  `,
})
export class AppComponent  {

}
