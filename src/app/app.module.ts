import { SummaryPipe } from './shared/summary.pipe';
import { AuthorService } from './author/author.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { GithubFollowersService } from './shared/services/github-followers.service';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './shared/title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { CoursesComponent } from "./courses/courses.component";
import { CoursesService } from "./courses/courses.service";
import { InputFormatDirective } from "./shared/custom-directives/input-format.directive";
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyCourseComponent } from './udemy-course/udemy-course.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from "./posts/post.service";
import { AppErrorHandler } from "./common/app-error-handler";
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';

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
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    UdemyCourseComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path:'',component: HomeComponent },
      { path:'followers/:id/:username',component: GithubProfileComponent },
      { path:'followers',component: GithubFollowersComponent },
      { path:'posts',component: PostsComponent },      
      { path:'archive/:year/:month',component: ArchiveComponent },
      { path:'**',component: NotFoundComponent },
    ])
  ],
  providers: [
    CoursesService,
    AuthorService,
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler ,useClass: AppErrorHandler } // where angular use ErrorHandler use AppErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
