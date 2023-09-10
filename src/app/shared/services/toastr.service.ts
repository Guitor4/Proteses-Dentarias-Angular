import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

constructor() { }

  public success(text: string) {
    alert(text);
  }
  public error(text: string) {
    alert(text);
  }
  public warning(text: string) {
    alert(text);
  }

}
