sap.ui.define([
	"sap/ui/core/mvc/Controller",
		'sap/m/Dialog'
], function(Controller) {
	"use strict";
	var ch_result = "";

	return Controller.extend("new_project.controller.View1", {

		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("to_view1").attachPatternMatched(this._onObjectMatched, this);

		},

		_onObjectMatched: function(oEvent) {
			var parameter = oEvent.getParameter("arguments");
			if (typeof parameter.idresult !== "undefined") {
				ch_result = parameter.idresult.toString();
				this.getView().byId("inputview1").setValue(ch_result);
				this.message();
			}

		},

		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		to_view2: function(oEvent) {
			//	this.getRouter().navTo("page2");

			var ch = this.getView().byId('inputview1').getValue();
			this.getRouter().navTo("to_view2", {
				idtranzaction: ch
			});
		},
		message: function() {
			sap.m.MessageToast.show("Была отправлена запись" + " - " + ch_result, {
				duration: 1000, // default
				width: "80em", // default
				my: "center bottom", // default
				at: "center bottom", // default
				of: window, // default
				offset: "0 0", // default
				collision: "fit fit", // default
				onClose: null, // default
				autoClose: true, // default
				animationTimingFunction: "ease", // default
				animationDuration: 5000, // default
				closeOnBrowserNavigation: false // default
			});
		}

	});

});