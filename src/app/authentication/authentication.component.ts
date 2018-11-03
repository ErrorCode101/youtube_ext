import {AfterViewInit, Component, ElementRef, ɵNoopNgZone} from '@angular/core';
import {Router} from '@angular/router';

declare const gapi: any;

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements AfterViewInit {

    private clientId:string = '534960127905-jprsp31c4j1fpdhdf4uk8q46fdlrhdde.apps.googleusercontent.com';

    constructor(private element: ElementRef, private _router:Router) {
        console.log('ElementRef: ', this.element);
    }

    private scope = [
        'profile',
        'email',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/admin.directory.user.readonly'
    ].join(' ');

    public auth2: any;
    public googleInit() {
        let that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope
            });
            that.attachSignin(that.element.nativeElement.firstChild);
        });
    }
    public attachSignin(element) {
        let that = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {

                let profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                //YOUR CODE HERE
                window.location.href = 'http://localhost:4200/channel';
            }.bind(this), function (error) {
                console.log(JSON.stringify(error, undefined, 2));
            });
    }

    public onSuccess(){
        this._router.navigateByUrl('channel');
    }

    ngAfterViewInit() {
        setTimeout(this.googleInit(), 60000)
    }


}
