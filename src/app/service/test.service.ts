import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public progressBarActive = new BehaviorSubject<boolean>(false);

  constructor() { }

  setProgress ( value:boolean) {
     this.progressBarActive.next(value);
  }
  
}
