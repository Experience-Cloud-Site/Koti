import { LightningElement, track, wire } from 'lwc';
import USER_ID from '@salesforce/user/Id';


export default class ProfileMenu extends LightningElement {
    userId = USER_ID;
   

    handleOnselect(event) {
        var selectedItemValue = event.detail.value;
        if(selectedItemValue === 'ProfileMenu'){
            this.handleUserProfile();
        }
        if(selectedItemValue === 'logout'){
            this.handleLogout();
        }
    }    

    handleUserProfile() {
        let url = 'https://ddl00000kfe9uuad-dev-ed.develop.my.site.com/profile/'+this.userId;
        window.open(url, "_self");
    }


    handleLogout() {
        let url = 'https://ddl00000kfe9uuad-dev-ed.develop.my.site.com/secur/logout.jsp';
        window.open(url, "_self");
    }
}