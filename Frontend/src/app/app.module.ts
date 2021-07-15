import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';


import { Routes, RouterModule } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { DeleteComponent } from './delete/delete.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { TrendsComponent } from './trends/trends.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { TrendschartComponent } from './trendschart/trendschart.component';
import { ChartModule } from 'angular2-chartjs';

const appRoutes: Routes = [

  {path: 'Home', component: HomeComponent},

  

  {path: 'Add', component: AddcourseComponent},

  {path: 'Trends', component: TrendsComponent},

  {path: 'Delete/:id', component: DeleteComponent},

  {path: 'Edit/:id', component: EditcourseComponent}



  

]

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    
    AddcourseComponent,
    DeleteComponent,
    EditcourseComponent,
    TrendsComponent,
    SearchfilterPipe,
    TrendschartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    ChartModule,
  
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
