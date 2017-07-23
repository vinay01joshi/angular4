import { CoursesService } from './courses.service';

import { Component } from "@angular/core";

@Component({
    selector : 'courses',
    templateUrl : './courses.component.html'
})
export class CoursesComponent {
    title = "List of courses";
    courses=[];
    computerCourses = [
        { id : 1 , name: 'AspNetCore' },
        { id : 2 , name: 'Angular2' },
        { id : 3 , name: 'Docker' },
        { id : 4 , name: 'Microsoft Bot' },
        { id : 5 , name: 'Electron Fundamental' }
    ]        
    viewMode = "map";

    constructor(private _courseService : CoursesService){
        // this.courses = this._courseService.getCourses()
    }

    onAdd(){
        this.computerCourses.push({
            id : 6,
            name :  'Git work flow'
        });
    }

    onRemove(computerCourse){
        let index = this.computerCourses.indexOf(computerCourse)
        this.computerCourses.splice(index,1);

    }

    loadCourses(){
        this.courses =  ["Angular2","AspNetCore","Docker"] ;
    }

    trackCourse(index,course){
        course ? course.id : undefined;
    }

}