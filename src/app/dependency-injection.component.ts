import { Component , OnInit} from '@angular/core';
import { PeopleListService } from './people-list/people-list.service'

declare var $ : any;

@Component({
  moduleId: module.id,
  selector: 'dependency-injection-app',
  templateUrl: 'dependency-injection.component.html',
  styleUrls: ['dependency-injection.component.css'],
  providers: [ PeopleListService ]

})
export class DependencyInjectionAppComponent implements OnInit{
  people: any[];
  selectedPerson: any = "";
  title = 'Welcome to the best website ever!';
  constructor( public peopleService: PeopleListService ){

  }
  getPeople() {
    this.people = this.peopleService.getPeople();
  }

  onPersonSelect( person ) {
    this.selectedPerson = person;
  }

  ngOnInit() {
    $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  }
);
    this.getPeople();
    $(document).ready(function(){
   $('.collapsible').collapsible({
     accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
 });
  }

}
