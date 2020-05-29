import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-canvas-view',
  templateUrl: './canvas-view.component.html',
  styleUrls: ['./canvas-view.component.scss']
})
export class CanvasViewComponent implements OnInit {
  @Input() formObj: any = [];
  public controllerform: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.controllerform = this._fb.group({
      fields: this._fb.array([])
    });
    const control = <FormArray> this.controllerform.controls.fields;
    this.formObj.forEach((ele, i) => {
      control.insert(i, this.initForm(ele));
    });
    console.log(this.controllerform.value);

  }

  initForm(obj) {
    return this._fb.group({
      "controlID": obj.controlID,
      "jsonPath": obj.jsonPath,
      "type": obj.type,
      "label": obj.label,
      "desc": obj.desc,
      "hintText": obj.hintText,
      "icon": obj.icon,
      "dataSourceType": obj.dataSourceType,
      "dataSource": obj.dataSource,
      "isEnabled": obj.isEnabled,
      "actionID": obj.actionID,
      "breID": obj.breID,
      "maskingScheme": obj.maskingScheme,
      "style": this._fb.group({
        "width": obj.style.width,
        "height": obj.style.height,
        "border": obj.style.border,
        "overflow": obj.style.overflow
      }),
      "validation": this._fb.group({
        "required": obj.validation.required,
        "maxLength": obj.validation.maxLength,
        "minLength": obj.validation.minLength,
        "maxValue": obj.validation.maxValue,
        "minValue": obj.validation.minValue,
        "defaultValue": obj.validation.defaultValue,
      }),
      "messages": this._fb.group({
        "required": obj.messages.required,
        "regex": obj.messages.regex,
        "maxLength": obj.messages.maxLength,
        "minLength": obj.messages.minLength,
        "maxValue": obj.messages.maxValue,
        "minValue": obj.messages.minValue,
      }),
      "controlDetails": this._fb.group({
        "subType": obj.controlDetails.subType,
        "type": obj.controlDetails.type,
        "group": obj.controlDetails.group,
        "event": obj.controlDetails.event
      }),
      "parentDetails": this._fb.group({
        "controlID": obj.parentDetails.controlID,
        "paramVal": obj.parentDetails.paramVal,
        "jsonName": obj.parentDetails.jsonName,
        "formAction": obj.parentDetails.formAction,
        "formID": obj.parentDetails.formID
      }),
      "default": this._fb.group({
        "value": obj.default.value,
        "isEnabled": obj.default.isEnabled,
        "visibility": obj.default.visibility
      }),
      "paramBR": this._fb.group({
        "visibilityBR": obj.paramBR.visibilityBR,
        "disableBR": obj.paramBR.disableBR
      })
    })
  }

  submit() {

  }

}
