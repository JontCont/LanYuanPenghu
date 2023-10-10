import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-v1',
  templateUrl: './footer-v1.component.html',
  styleUrls: ['./footer-v1.component.scss']
})
export class FooterV1Component implements OnInit {
  fbUrl : string ="https://www.facebook.com/profile.php?id=100063966252433&paipv=0&eav=Afb4-fy7T4xNKtwHj3ApWMHirKflcMovhRkfP3jLSUfXzsglaW8pi_eD0VbXx8Dp8bA&_rdr";
  lineUrl : string = "https://liff.line.me/1645278921-kWRPP32q/?accountId=346nabfy";
  mailUrl : string ="https://www.facebook.com/profile.php?id=100063966252433&paipv=0&eav=Afb4-fy7T4xNKtwHj3ApWMHirKflcMovhRkfP3jLSUfXzsglaW8pi_eD0VbXx8Dp8bA&_rdr";


  constructor() { }

  ngOnInit(): void {
  }

}
