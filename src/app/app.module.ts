import { SummaryPipe } from './shared/summary.pipe';
import { AuthorService } from './author/author.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from "./courses.component";
import { AuthorComponent } from './author/author.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './shared/title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    BindingsComponent,
    SummaryPipe,
    FavoriteComponent,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
