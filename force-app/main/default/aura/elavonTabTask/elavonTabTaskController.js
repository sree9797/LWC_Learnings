/* eslint-disable no-alert */
({
  doInit: function (component) {
    var accId = component.get("v.recordId");
    alert(accId);
    var recordTypeId = component.get("v.pageReference").state.recordTypeId;
    if (recordTypeId) {
      component.set("v.recordTypeId", recordTypeId);
    }
    var action = component.get("c.getRecordTypeDetails");
    action.setParams({ recTypeId: recordTypeId });
    // Call back method
    action.setCallback(this, function (response) {
      var respval = response.getReturnValue();
      component.set("v.activeTab", respval);
    });
    // this.getExistingRecords(component, helper);
    // Enqueue Action
    $A.enqueueAction(action);
  }
});
