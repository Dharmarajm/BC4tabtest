import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {
new_pwd:any;
confirm_pwd: any;
  constructor() { }

  ngOnInit() {
  }
updatePassword(){
	let data=this.new_pwd;
	console.log(this.new_pwd);
    console.log(this.confirm_pwd);
}
}
