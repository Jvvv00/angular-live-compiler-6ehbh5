import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DetailsComponent } from '../components/details/details.component';
import { DetailsActorsComponent } from '../components/details-actors/details-actors.component';
import { DetailsMovieComponent } from '../components/details-movie/details-movie.component';
import { DetailsReviewsComponent } from '../components/details-reviews/details-reviews.component';
import { SearchComponent } from '../components/search/search.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes=[
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'details/:id', component: DetailsComponent},
  {path:'details/actors/:id', component: DetailsActorsComponent},
  {path:'details/movie/:id', component: DetailsMovieComponent},
  {path:'details/reviews/:id', component: DetailsReviewsComponent},
  //{path:'feedback', component: FeedbackComponent},
  {path:'search/:movieTitle', component: SearchComponent},

  //404 not found
 {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutesModule{}