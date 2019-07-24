import { Component, Inject } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  sessionGuid:string;
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }
 ngOnInit() {
    if(this.storage.get("sessionguid")=="" || this.storage.get("sessionguid")==null)
    {
      this.sessionGuid= this.newGuid();
      this.storage.set("sessionguid",this.sessionGuid);
    }    
    else  this.sessionGuid= this.storage.get("sessionguid");   
} 
public newGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
}

