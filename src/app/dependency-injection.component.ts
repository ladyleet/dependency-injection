import { Component , OnInit} from '@angular/core';

declare var $ : any;

@Component({
  moduleId: module.id,
  selector: 'dependency-injection-app',
  templateUrl: 'dependency-injection.component.html',
  styleUrls: ['dependency-injection.component.css']
})
export class DependencyInjectionAppComponent implements OnInit{
  title = 'Welcome to the best website ever!';
  constructor(){

  }

  ngOnInit() {
    $(document).ready(function(){
   $('.collapsible').collapsible({
     accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
 });
  }
}
