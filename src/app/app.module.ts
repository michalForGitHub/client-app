import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ResultsCounterComponent } from './results-counter/results-counter.component';
import { MystarsComponent } from './mystars/mystars.component';
import {RouterModule,Routes} from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';

 


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent, 
    SearchResultComponent,
    SearchResultsComponent,
    ResultsCounterComponent,
    MystarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
     RouterModule,
     StorageServiceModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
