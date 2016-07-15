sap.ui.define([
'jquery.sap.global',
		'sap/m/MessageBox',
		'sap/m/MessageToast',
	 	'sap/m/Dialog',
	//	'sap/ui/model/Filter',
		'sap/ui/core/mvc/Controller'

 
], function(jQuery, MessageBox, MessageToast, Controller, SimpleType, ValidateException, JSONModel) {
	"use strict";
	  	 var ch = "" ;
//jQuery.sap.require("jquery.sap.resources");
	return Controller.extend("new_project.controller.view2", {
			onInit: function() {
 			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
 		  	oRouter.getRoute("to_view2").attachPatternMatched(this._onObjectMatched, this);
		
			},
			
		_onObjectMatched: function (oEvent) {
			ch = oEvent.getParameter("arguments").idtranzaction.toString() ;
		  	this.getView().byId("inputview2").setValue(ch + "asdasd");
 		},

		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
			
		},
			to_view1: function() {
 			var ch_value = this.getView().byId("inputview2").getValue();
 	

			this.getRouter().navTo("to_view1", {idresult: ch_value});
			},
			
			
		dialog: function() {
			// Create a dialog to get the information of the bank to be created
			 
			var oDialog = new sap.ui.commons.Dialog("Dialog", {
				modal: true
			 
			});
			oDialog.setTitle("New Bank Collection");
		} 
	 

			
			


	
		
		
		
	});

});