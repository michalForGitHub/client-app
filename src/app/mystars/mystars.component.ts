import { Component, OnInit, Input, Inject } from '@angular/core';
import { GitHubRepositoriesService } from '../git-hub-repositories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-mystars',
  templateUrl: './mystars.component.html',
  styleUrls: ['./mystars.component.scss']
})
export class MystarsComponent implements OnInit {
  items: any=[]; 
   guid:string;
   defaultaction:string='unstar';
  constructor(private gitHubRepositoriesSvc: GitHubRepositoriesService,private router: Router,@Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() 
  {
    //get stared results per session
     this.guid =  this.storage.get("sessionguid");  
     this. getMyStars(this.guid);
}
  //get:guid of the current session
  //return all stared results
  public getMyStars(guid) {
  //get stars page from cache
    this.gitHubRepositoriesSvc.getMyStars(guid)
    .subscribe(
     (response) => {
         this.items=response; 
      },
       (error) => console.log(error)
    );  
      }
      //on click 'back' btn navigate to home page
      backToHome()
      {
        this.router.navigate(['/home'], { queryParams: { fromBack: true} });
      }




}
   
