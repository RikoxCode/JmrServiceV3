import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }

  public goBack(){
    window.history.back();
  }
}
