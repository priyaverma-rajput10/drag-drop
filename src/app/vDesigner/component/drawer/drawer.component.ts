import { Component, OnInit } from "@angular/core";
import { DropzonesService } from "../../service/dropzones.service";

@Component({
  selector: "app-drawer",
  templateUrl: "./drawer.component.html",
  styleUrls: ["./drawer.component.scss"]
})
export class DrawerComponent implements OnInit {

  fieldModels = [
    {
      controlID: 1,
      jsonPath: "ICI.CASE_ID",
      type: "TEXT",
      label: "CASE ID",
      desc: "CASE ID",
      hintText: "asgahsfha",
      icon: "",
      dataSourceType: "",
      dataSource: "",
      isEnabled: true,
      actionID: "FR06REPORT",
      breID: "BRE001",
      maskingScheme: null,
      style: {
        width: "100%",
        height: "20vh",
        overflow: "hidden",
      },
      validation: {
        required: true,
        maxLength: "16",
        minLength: "16",
        maxValue: "",
        minValue: "",
        defaultValue: ""
      },
      messages: {
        required: "MSG_02",
        regex: "MSG_02",
        maxLength: "MSG_02",
        minLength: "MSG_02",
        maxValue: "MSG_02",
        minValue: "MSG_02"
      },
      controlDetails: {
        subType: null,
        type: "TEXT",
        group: "personal",
        event: null
      },
      parentDetails: {
        controlID: "",
        paramVal: "",
        jsonName: "",
        formAction: "",
        formID: ""
      },
      default: {
        value: null,
        isEnabled: false,
        visibility: true
      },
      paramBR: {
        visibilityBR: null,
        disableBR: null
      }
    },
    {
      controlID: 1,
      jsonPath: "ICI.CASE_ID12",
      type: "TEXTAREA",
      label: "CASE ID1",
      desc: "CASE ID2",
      hintText: "asgahsfha",
      icon: "",
      dataSourceType: "",
      dataSource: "",
      isEnabled: true,
      actionID: "FR06REPORT",
      breID: "BRE001",
      maskingScheme: null,
      style: {
        width: "100%",
        height: "20vh",
        overflow: "hidden"
      },
      validation: {
        required: true,
        maxLength: "16",
        minLength: "16",
        maxValue: "",
        minValue: "",
        defaultValue: ""
      },
      messages: {
        required: "MSG_02",
        regex: "MSG_02",
        maxLength: "MSG_02",
        minLength: "MSG_02",
        maxValue: "MSG_02",
        minValue: "MSG_02"
      },
      controlDetails: {
        subType: null,
        type: "TEXT",
        group: "personal",
        event: null
      },
      parentDetails: {
        controlID: "",
        paramVal: "",
        jsonName: "",
        formAction: "",
        formID: ""
      },
      default: {
        value: null,
        isEnabled: false,
        visibility: true
      },
      paramBR: {
        visibilityBR: null,
        disableBR: null
      }
    }
    // {
    //   "controlID": 2,
    //   "jsonPath": "ICI.DATA.BRANCH_NAME",
    //   "type": "SELECT",
    //   "label": "Branch",
    //   "desc": "Branch",
    //   "hintText": "",
    //   "icon": "",
    //   "dataSource": [{
    //     "key": 1,
    //     "value": 'A'
    //   }, {
    //     "key": 2,
    //     "value": 'B'
    //   }],
    //   "isEnabled": true,
    //   "actionID": "FR06REPRT",
    //   "breID": "BRE001",
    //   "maskingScheme": null,
    //   "validation": {
    //     "required": true,
    //     "maxLength": "",
    //     "minLength": "",
    //     "maxValue": "",
    //     "minValue": "",
    //     "defaultValue": ""
    //   },
    //   "messages": {
    //     "required": "",
    //     "regex": "",
    //     "maxLength": "",
    //     "minLength": "",
    //     "maxValue": "",
    //     "minValue": ""
    //   },
    //   "controlDetails": {
    //     "subType": null,
    //     "type": "SELECT",
    //     "group": "LOV_BRANCH",
    //     "event": null
    //   },
    //   "parentDetails": {
    //     "controlID": "",
    //     "paramVal": "",
    //     "jsonName": "",
    //     "formAction": "",
    //     "formID": ""
    //   },
    //   "default": {
    //     "value": null,
    //     "isEnabled": true,
    //     "visibility": true
    //   },
    //   "paramBR": {
    //     "visibilityBR": null,
    //     "disableBR": null
    //   }
    // },
  ];

  constructor(private dropZones: DropzonesService) {}

  ngOnInit() {}

  drop(event) {
    this.dropZones.test(event);
    console.log("event");
    // this.dropZones.moveInList(event);
  }
}
