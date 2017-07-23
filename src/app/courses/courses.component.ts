import { CoursesService } from './courses.service';

import { Component } from "@angular/core";

@Component({
    selector : 'courses',
    templateUrl : './courses.component.html'
})
export class CoursesComponent {
    title = "List of courses";
    courses;        

    constructor(private _courseService : CoursesService){
        this.courses = this._courseService.getCourses()
    }

    

}