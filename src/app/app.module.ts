import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { UsersComponent } from './comps/users/users.component';
import { TodosComponent } from './comps/todos/todos.component';
import { PostsComponent } from './comps/posts/posts.component';
import { AlbumsComponent } from './comps/albums/albums.component';
import { MatModule } from './modules/mat.module'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    TodosComponent,
    PostsComponent,
    AlbumsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
