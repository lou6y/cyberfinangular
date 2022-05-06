import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { LoanAssistantBotComponent } from './loan-assistant-bot.component';
import { ElementRef, Injectable, QueryList, ViewChildren } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoanBotService {

    @ViewChildren('listItem')
    public listItems!: QueryList<ElementRef<HTMLLIElement>>

    INDEX:any;

    webSocketEndPoint: string = 'http://localhost:8081/ws';
    topic: string = "/user/queue/chat.sendMessage";
    stompClient: any;
    appComponent: LoanAssistantBotComponent;
    constructor(appComponent: LoanAssistantBotComponent){
        this.appComponent = appComponent;
        this.INDEX=0;
    }
    _connect() {
        console.log("Initialize WebSocket Connection");
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame: any) {
            _this.stompClient.subscribe('/user/queue/chat.sendMessage', function (sdkEvent: any) {
                _this.onMessageReceived(sdkEvent);
            });
            _this.stompClient.subscribe('/channel/public', function (sdkEvent: any) {
              _this.onMessageReceived(sdkEvent);

              _this.stompClient.send("/app/chat.addUser",
              {},
              JSON.stringify({sender: 'User', type: 'JOIN'})
          )
          });
            //_this.stompClient.reconnect_delay = 2000;
        }, this.errorCallBack);
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error: string) {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            this._connect();
        }, 5000);
    }

 /**
  * Send message to sever via web socket
  * @param {*} message
  */
    _send(message: any) {
        console.log("calling logout api via web socket");
        this.stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(message));
    }

    onMessageReceived(payload:any) {

      var message = JSON.parse(payload.body);
      var str="";
    str += "<div id='cm-msg-"+this.INDEX+"' class=\"chat-msg "+'self'+"\">";
    str += '          <span class="msg-avatar">';
    str += '           <img id="avatar" src="/assets/img/loanImages/drib_blink_bot.gif" >';
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += message.content;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+this.INDEX).hide().fadeIn(300);
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
  }
}
