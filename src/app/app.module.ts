import { AuthorService } from './author/author.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from "./courses.component";
import { AuthorComponent } from './author/author.component';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    BindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
