import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  isDevelopmentMode: boolean = false

  constructor() { }

  _(message: any, type: string = "normal"){
    if(this.isDevelopmentMode){
      switch (type){
        case "error":
          console.error(message);
          break;

        case "warning":
          console.warn(message);
          break;

        case "note":
          console.log(`%c${message}`, 'color: grey;');
          break;

        default:
          console.log(message);
          break;
      }
    }
  }
}
