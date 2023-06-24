import { LightningElement, api } from 'lwc';

export default class LwcSpreadDirectiveChild extends LightningElement {

    @api name;
    @api age;
    @api city;
    
}