import { Component, OnInit } from '@angular/core';
import { LoanBotService } from './LoanBotService';

declare function greets() : any;

@Component({
  selector: 'app-loan-assistant-bot',
  templateUrl: './loan-assistant-bot.component.html',
  styleUrls: ['./loan-assistant-bot.component.scss']
})
export class LoanAssistantBotComponent implements OnInit {

  webSocketAPI!: LoanBotService;
  greeting: any;
  message!: string;
  INDEX :any;

  constructor() {
  }

  ngOnInit(): void {
    this.webSocketAPI = new LoanBotService(new LoanAssistantBotComponent());
    this.connect();
    this.INDEX=0;

  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){

    var messageContent = (<HTMLInputElement>document.getElementById('chat-input'));

    var chatMessage = {
      sender: "CyberUser",
      content: messageContent.value,
      type: 'CHAT'
    };

    this.INDEX++;
    var type= 'user';
    var u = document.createElement("link");
    u.rel = "stylesheet";
    u.href = "main.css";

    var str="";
    str += "<div id='cm-msg-"+this.INDEX+"' class=\"chat-msg "+type+"\">"
    str += "          <span class=\"msg-avatar\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += messageContent.value;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $(".chat-logs").append(u);
    $("#cm-msg-"+this.INDEX).hide().fadeIn(300);
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    this.webSocketAPI._send(chatMessage);
    messageContent.value='';
  }

  handleMessage(message:any){
    this.greeting = message;
  }

  //CHATBOTCONFIG
}
