import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';
import { Router, NavigationExtras } from '@angular/router';
import { SettingServiceService } from './setting-service.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pic : any;
  linkSource:any;
  img:any;
  caregiver:any;
  data:any;
  data1:any;
  constructor(public sanitizer: DomSanitizer, public serv: SettingServiceService, public actionSheetController: ActionSheetController, public router:Router, public alertController: AlertController) { }

  ngOnInit() {
  
  }

  ionViewWillEnter(){
    this.serv.setting().subscribe(res => {
      this.pic = res;
      console.log(this.pic)
      this.caregiver = this.pic.caregiver;
      
      if(this.pic.profile_pic == null)
      {  
         this.img="../../../assets/img/contact.png"
        
      }else{
        this.linkSource = this.pic.profile_pic;
        this.img= this.sanitizer.bypassSecurityTrustResourceUrl(this.linkSource)
        console.log(this.img)
      }
      
    })
  }

  edit(){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.pic)
      }
    };
    
    //this.navCtrl.navigateForward(['/editprofile']);
    //this.router.navigate(['/editprofile',{item:this.pic}])
    this.router.navigate(['self-care-tabs/tabs/tab3/edit-profile'], navigationExtras)
    //this.navCtrl.navigate(['/self-care-tabs/tabs/tab3/editprofile']);
  }
 async careGiverName(){

     const alert = await this.alertController.create({
      header: 'Radio',
      backdropDismiss: false,
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Bravo',
          value: 'Bravo',
         
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Russel',
          value: 'Russel'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (res) => {
            console.log(res)
            this.data1=res;
            console.log('Confirm Ok');
          }
        }
      ] 
    });

    await alert.present();
  }
  
async medicineDuration(){
 
const alert1 = await this.alertController.create({
      header: 'Radio',
      backdropDismiss: false,
      inputs:  [{name:'day1',type:'radio',label:'1 Day',value:"1 Day"},
                {name:'day2',type:'radio',label:'3 Days',value:"3 Days"},
                {name:'day3',type:'radio',label:'5 Days',value:"5 Days"},
                {name:'day4',type:'radio',label:'10 Days',value:"10 Days"},
                {name:'day5',type:'radio',label:'15 Days',value:"15 Days"}
              ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (res) => {
            console.log(res);
            
             this.data=res;
            console.log('Confirm Ok');
          }
        }
      ]
      
    });

    await alert1.present();
}
}
