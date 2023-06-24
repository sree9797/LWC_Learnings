/* eslint-disable no-else-return */
import { LightningElement, api, wire } from "lwc";
import getRecordTypeDetails from "@salesforce/apex/ElavonTabTaskController.getRecordTypeDetails";
import {
  FlowAttributeChangeEvent,
  FlowNavigationNextEvent,
  FlowNavigationBackEvent,
  FlowNavigationPauseEvent,
  FlowNavigationFinishEvent
} from "lightning/flowSupport";
export default class ValidateInputFromScreenFlow extends LightningElement {
  @api placeholder;
  @api value;
  @api label;
  @api required;
  @api labelvisible = false;
  requiredMessage =
    "[X] Please fill in all required fields before submitting the form.";
  _validity = true;

  handlechange(event) {
    event.preventDefault();
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.value = event.target.value;
  }

  @api
  validate() {
    if (this.validateInput()) {
      return {
        isValid: true
      };
    } else {
      return {
        isValid: false,
        errorMessage: this.requiredMessage
      };
    }
  }
  validateInput() {
    if (!this.value) {
      this._validity = false;
    }
    return this._validity;
  }

  @wire(getRecordTypeDetails)
  getBoats({ data, error }) {
    if (data) console.log("‘print here’");
    else if (error) console.log("‘print in else’");
  }
  @wire(getRecordTypeDetails, {})
  getBoats1({ error, data }) {
    if (data) console.log("‘print here’");
    else if (error) console.log("‘print in else’");
  }
}
