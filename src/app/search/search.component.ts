import { GitHubRepositoriesService } from '../git-hub-repositories.service';
import { Component,Input, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() shareResultsEvent = new EventEmitter();
  items: any=[]; 
  listItems:any=[];
  @Input () fromback;
  @Input () guid;
  keyWordValue:string;
  constructor(private gitHubRepositoriesSvc: GitHubRepositoriesService,private router: Router,private route: ActivatedRoute,@Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    //remember last searchke and send to search
    let keyword=this.storage.get("repositorykeyword");
    if(keyword!=null && this.fromback=="true")
    {
      this.keyWordValue=keyword;
      this.GetRepository(this.keyWordValue);  
    }
   
  }
  //get:keyword
  //return results from github API.
  GetRepository(RepositoryKeyWord)
  {
    if(RepositoryKeyWord!=null)
    {
      this.storage.set("repositorykeyword",RepositoryKeyWord);
      this.gitHubRepositoriesSvc.GetRepositoryByKeyWord(RepositoryKeyWord)
      .subscribe(
       (response) => {
            let data  = response.items;
            this.listItems = data;
            this.listItems.forEach(item => {
            let  newitem = {ID: item.id,  
                FullName: item.full_name,  
                Url:item.html_url,
                Description:item.description,
                IconUrl:item.owner.avatar_url
               };
               this.items.push(newitem);
            });
            this.shareResultsEvent.emit( this.items);       
        },
         (error)    => console.log(error)
      );
  }
}
//navigate to 'my stared'
navigateToStars()
{
  this.router.navigate(['/stars']);
}

}
