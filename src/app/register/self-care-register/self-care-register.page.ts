import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { UsermanagementService } from '../../core/services/usermanagement.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-self-care-register',
  templateUrl: 'self-care-register.page.html',
})
export class selfCareRegisterPage {
	detailForm:FormGroup
 
	constructor(private fb: FormBuilder, public user_service: UsermanagementService, public navCtrl: NavController) { }

	  ngOnInit() {
	  
	    this.detailForm=this.fb.group({
	     'name':[null,[Validators.required]],
	     'email':[null,[Validators.compose([
			Validators.required,
			Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
		])]],
	     'mobile_no':[null,[Validators.pattern('[6-9]\\d{9}')]],
	     'address':[null,[Validators.required]],
	     'country':[null,[Validators.required]],
	     'care_name':[null,[Validators.required]],
	     'care_mobile':[null,[Validators.required]],
	     'password':[null,[Validators.required]],
	     'blood_group':[null,[Validators.required]],
	     'age':[null,[Validators.required]]
	    });
	  }

	self_detail(detail){
		console.log(detail)
	 let data={
	        "user":{
	                'name': detail.name,
	                'email': detail.email,
	                'password': detail.password,
	                'mobile_no': detail.mobile_no,
	                'address': detail.address,
	                'country': detail.country,
	                'blood_group': detail.blood_group,
	                'age': detail.age,
	                'role_id': 1
	            },
	            "caregiver":{
	                        'name': detail.care_name,
	                        'mobile_no': detail.care_mobile,
	                        'role_id': 2
	                    }
	                }
	         

	  this.user_service.care_detail(data).subscribe(res=>{
	  	console.log(res)
	  	
		this.navCtrl.navigateForward('register/care-giver-payment');
	 });

	}

}
