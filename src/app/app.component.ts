import { Component } from '@angular/core';
import { User } from './user';
import {UserdatahandelService} from './userdatahandel.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  submited=false
  constructor(private _enrol:UserdatahandelService){}
  
 userModel=new User('',0, new Date(""),'')

 onSubmit()
{
  this.submited=true
  this._enrol.userData(this.userModel)
  .subscribe(
    data=>console.log('success',data)
  )
}
}
