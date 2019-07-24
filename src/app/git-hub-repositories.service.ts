import { Injectable, Inject } from '@angular/core';
import { Observable, observable ,of, throwError, BehaviorSubject } from 'rxjs'; 
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';  
import { catchError, tap, map } from 'rxjs/operators';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
 
@Injectable({
  providedIn: 'root'
})
export class GitHubRepositoriesService {
  webApiUrl = 'http://localhost:54749/Api/RepositorySearch';  
  githubSearch="https://api.github.com/search/repositories?q=";
  currentItem:any;
 
    constructor(private http
      : HttpClient) {   
     } 
   //go to github API
   //get:keyword
   //return suitable results
   GetRepositoryByKeyWord(keyWord:string)
{
  return this.http.get(this.githubSearch+keyWord);

  }  
  //get:item to star/unstar and guid for session
bookmarkResult(item,guid,action)
{
  const httpheaders = new HttpHeaders({
    "Content-Type": "application/json", 
    "Accept": "application/json",
    "guid":guid,
    "Access-Control-Allow-Origin":"*"
});
  const httpOptions = { headers: httpheaders}; 
  //in case of star
if(action==='star')
{  return this.http.post(this.webApiUrl + '/starBookmarkRepository/',
item,httpOptions);}
else
//in case of star
{
  return this.http.post(this.webApiUrl + '/unstarBookmarkRepository/',
  item,httpOptions);
}
}
//get:guid for session
//return:all my stared items
getMyStars(guid)
{
  return this.http.get(this.webApiUrl + '/GetBookmarkResult/'+guid);
}
}
