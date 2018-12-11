import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  // FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angular-6-social-login-v2';
import { GoogleLoginService } from 'src/app/services/login/google-login.service';
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {
 
  constructor(private socialAuthService: AuthService,private googleLoginService: GoogleLoginService ) {}
  ngOnInit() {
  }
  public socialSignIn(socialPlatform : string) {
    
    let socialPlatformProvider;
    // if(socialPlatform == "facebook"){
    //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    // }
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        // console.log(socialPlatform+" sign in data : " , userData);
        this.googleLoginService.googleVerify(userData.idToken).subscribe(data =>{
          // console.log(data);
          if(data.email_verified == "true"){
            console.log('Successful verification!');
            //When website is launched create different googleloginprovider code found in app.module
            //true validation validates the 'iss' and exp claims from the googletoken
            this.googleLoginService.googleSave(data).subscribe(data2 =>{
              if(data2.status== "success"){
                console.log('Successful login!');
                //Saved to database AND logged in
              }
              // localStorage.setItem('currentUser', JSON.stringify(data));
              // alert(localStorage.currentUser);
              sessionStorage.setItem('currentUser', JSON.stringify(data));
              //sessionStorage//maybe use session storage insteAD OF localstorage
              console.log('Logging in as: ' + data.email);
              //returns user details to local storage
              return data;
            });

          }else{
            console.log("Failed to verify");
          }
        });  
      }
    );  
  }//end of social sign in
  public socialSignOut(){
    //make a google service call to update the active status and the date of exit
    sessionStorage.removeItem('currentUser');
  }
  
}
