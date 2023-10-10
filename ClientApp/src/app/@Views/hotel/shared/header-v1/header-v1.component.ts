import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-v1',
  templateUrl: './header-v1.component.html',
  styleUrls: ['./header-v1.component.scss']
})
export class HeaderV1Component implements OnInit {
  active : string ="close";
  constructor() { }

  ngOnInit(): void {
  }
  onMenuClick():void {
    console.log(1);
    if(this.active == "close"){
      this.active = "open";
    }else{
      this.active ="close";
    }
  }
}
