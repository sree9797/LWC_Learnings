import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {

    carList = ["KIA", "TATA", "Breezaa", "Nexon", "XUV300"];
    contactList = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        }
    ];
}