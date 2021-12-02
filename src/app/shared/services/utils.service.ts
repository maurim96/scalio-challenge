import { Injectable } from '@angular/core';

import { Subject } from "rxjs";

export enum MessageType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning'
};

export class AlertMessage {
  msg: string;
  type: MessageType;
}

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  alertMessageEmitter = new Subject<AlertMessage>();

  private _loading = true;

  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    this._loading = value;
  }

  constructor() {}

  successMessageEmitter(msg: string): void {
    this.alertMessageEmitter.next({
      msg,
      type: MessageType.Success
    });
  }

  errorMessageEmitter(msg: string): void {
    this.alertMessageEmitter.next({
      msg,
      type: MessageType.Error
    });
  }

  infoMessageEmitter(msg: string): void {
    this.alertMessageEmitter.next({
      msg,
      type: MessageType.Info
    });
  }

  warningMessageEmitter(msg: string): void {
    this.alertMessageEmitter.next({
      msg,
      type: MessageType.Warning
    });
  }
}
