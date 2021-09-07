import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [{
    path:'',
    component: DefaultComponent,
    children:[{
        path:'',
        component: DashboardComponent
    },{
        path:'posts',
        component:PostsComponent
    }]
},
{
    path:'posts',
    component: PostsComponent,
}
   

]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
