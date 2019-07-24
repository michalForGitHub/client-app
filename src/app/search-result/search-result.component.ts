import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { GitHubRepositoriesService } from '../git-hub-repositories.service';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input () myItem;
  guid:string;
  @Input () actionValue;
  constructor(private gitHubRepositoriesSvc: GitHubRepositoriesService,private http
    : HttpClient,@Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
   this.guid = this.storage.get("sessionguid");   
  }
  //action:bookmark item
  //get:btn click and item to star
  public bookmarkResult(event, item) :void{
     //change btn value to unstar or star
  let action=(event.srcElement).textContent;
 
      if(action === 'star') { 
      this.actionValue="unstar";
      } else {
        this.actionValue="star";
      }
  
//send data to web api and save in session   
this.gitHubRepositoriesSvc.bookmarkResult(item,this.guid,action)
.subscribe(
 (response) => {
  
    if(response)
     { 
        
     }
        
  },
   (error)  => console.log(error)
);
   
  }
 

  }


