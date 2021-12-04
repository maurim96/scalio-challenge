import { Component, OnInit } from '@angular/core';

import { AlertMessage, UtilsService, MessageType } from "../../../shared";

import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public utilsService: UtilsService,
              private messageService: NzMessageService) { }

  ngOnInit(): void {
    this.utilsService.alertMessageEmitter.subscribe((msg: AlertMessage) => {
      switch (msg.type) {
        case MessageType.Error:
          this.messageService.error(msg.msg);
          break;
        case MessageType.Info:
          this.messageService.info(msg.msg);
          break;
        case MessageType.Success:
          this.messageService.success(msg.msg);
          break;
        case MessageType.Warning:
          this.messageService.warning(msg.msg);
          break;
        default:
          this.messageService.warning(msg.msg);
          break;
      }
    });
  }

}
