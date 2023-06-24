/* eslint-disable @lwc/lwc/no-api-reassignments */
/* eslint-disable no-alert */
import { api, LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getRecordTypeId from "@salesforce/apex/ElavonTabTaskController.getRecordTypeId";

import NAME_FIELD from "@salesforce/schema/Banking_Information__c.Name";
import ACCOUNT_FIELD from "@salesforce/schema/Banking_Information__c.Account__c";
import COUNTRY_FIELD from "@salesforce/schema/Banking_Information__c.Country__c";
import ACCTYPE_FIELD from "@salesforce/schema/Banking_Information__c.Account_Type__c";

export default class ElavonTabForBankingInformation extends LightningElement {
  @api activeTabValue;
  @api recordTypeId;
  loanRecordId;
  depositRecordId;
  chargebackRecordId;
  error;

  fields = [NAME_FIELD, ACCOUNT_FIELD, COUNTRY_FIELD, ACCTYPE_FIELD];

  get activeTab() {
    return this.activeTabValue;
  }

  tabChangeHandler(event) {
    this.activeTabValue = event.target.value;
    getRecordTypeId({ name: this.activeTabValue })
      .then((result) => {
        this.activeTabValue = result;
      })
      .catch((error) => {
        this.error = error;
      });
  }
  handleSuccess(event) {
    const evt = new ShowToastEvent({
      title: "Banking Information created",
      message: "Record ID: " + event.detail.id,
      variant: "success"
    });
    this.dispatchEvent(evt);
  }
}
