import { Injectable } from '@angular/core';
import { ok } from 'assert';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e) => {
      if (e) {
        okCallback();
      } else { }
    });
  }

  error(message: string) {
    alertify.error(message);
  }

  success(message: string) {
    alertify.success(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }

}
