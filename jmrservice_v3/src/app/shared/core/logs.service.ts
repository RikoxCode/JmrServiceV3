import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  isDevelopmentMode: boolean = false

  constructor() { }

  _(message: string, type: string = "normal"){
    if(this.isDevelopmentMode){
      switch (type.toLowerCase()){
        case "error":
          console.error(message);
          break;

        case "warning":
          console.warn(message);
          break;

        case "note":
          console.log(`%c ${message}`, 'color: grey; text-decoration: underline;');
          break;

        default:
          console.log(message);
          break;
      }
    }
  }
}
