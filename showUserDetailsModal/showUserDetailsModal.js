/*
    Purpose         : This Component Will Show User Details In Modal
    Created Date    : 06/14/2023
    Created By      : Shantanu Sharma
    version         : V_1.0 - Created By Shantanu Sharma.
*/

import { LightningElement,api } from 'lwc';

export default class ShowUserDetailsModal extends LightningElement {

    @api currentLoggedInUserDetails;
    @api isMale;
    @api isFemale;
    showModal = true;

    //Method To Dispatch Event To Dashboard To Close The User Detail Modal
    closeModal() {
        this.showModal = false;
        this.dispatchEvent(new CustomEvent('closemodal',{bubbles: true, composed: true}));
    }
        
    
    
       
}