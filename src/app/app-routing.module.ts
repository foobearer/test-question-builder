import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'answers', component: AnswerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
