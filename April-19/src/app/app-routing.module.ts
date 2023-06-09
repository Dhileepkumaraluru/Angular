import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { DetailsComponent } from './pages/home/details/details.component';

const routes: Routes = [
    {path:"",component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path: "testimonials",component:TestimonialComponent},
    {path: "reachus", component:ContactComponent},
    {path: "details/:id",component: DetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }