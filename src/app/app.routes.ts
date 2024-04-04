import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import path from 'path';
import { Component, NgModule } from '@angular/core';
import { BrowseComponent } from './page/browse/browse.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [

    {
        path: "login",
        component:LoginComponent
    },

    {path: "browse",
    component:BrowseComponent, canActivate: [AuthGuard]  
    },
   {
    path: "",
    component:LoginComponent
   },
   {
   path: "movie-details",
   component:MovieDetailsComponent, canActivate: [AuthGuard] 
  }
  

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }