import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  @Input() formObj: object;
  @Output() data = new EventEmitter<any>();
  public controllerform: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    // console.log(this.formObj);
    this.controllerform = this.initForm(this.formObj);
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
    console.log(this.controllerform.value)
    this.data.emit(this.controllerform.getRawValue())
  }
}
