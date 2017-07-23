import { CoursesService } from './courses.service';

import { Component } from "@angular/core";

@Component({
    selector : 'courses',
    templateUrl : './courses.component.html'
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    computerCourses = [
        { id : 1 , name: 'AspNetCore' },
        { id : 2 , name: 'Angular2' },
        { id : 3 , name: 'Docker' },
        { id : 4 , name: 'Microsoft Bot' },
        { id : 5 , name: 'Electron Fundamental' }
    ]        
    viewMode = "map";

    constructor(private _courseService : CoursesService){
        this.courses = this._courseService.getCourses()
    }

    

}