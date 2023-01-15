import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  title :string ="最新消息";
  lineUrl : string = "https://liff.line.me/1645278921-kWRPP32q/?accountId=346nabfy";

  constructor() { }

  ngOnInit(): void {
  }

}
