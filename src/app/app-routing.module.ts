import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';


// Implement the routes for BlogComponent with path as 'addblog'
const routes: Routes = [
  {path:'addblog',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// AppRoutingModule is responsible for routing to all the components
export class AppRoutingModule { }
