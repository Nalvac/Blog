import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';

  constructor( ){


  }

  listPost = [
    new PostService ("Mon premier Post", "Cruentae exagientium simulantium ubi iracundae dolere incidentia salute principis filido amplificateur proximorum incidentorum salut salute vel vocibus et vel ubi terrarum ."),
    new PostService ("Mon deuxième Post", "Cruentae exagientium simulantium ubi iracundae dolere incidentia salute principis filido amplificateur proximorum incidentorum salut salute vel vocibus et vel ubi terrarum ."),
    new PostService ("Encore un  Post", "Cruentae exagientium simulantium ubi iracundae dolere incidentia salute principis filido amplificateur proximorum incidentorum salut salute vel vocibus et vel ubi terrarum ."),
    
  ]


}
