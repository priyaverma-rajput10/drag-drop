import { Component, OnInit } from '@angular/core';
import { DropzonesService } from '../dropzones.service';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import _ from 'underscore';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  public canvasItems = [];
  public formObj: FormGroup;
  public isControllerView: boolean = false;
  public controllerObj: any = {
    index: <number> 0,
    data: {},
    type: ""
  };

  constructor(
    private dropZones: DropzonesService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.dataSource();
    this.formObj = this._fb.group({
      fields: this._fb.array([])
    });
  }

  dataSource() {
    this.dropZones.dataSource.subscribe(data => {
      console.log(data);
      this.drop(data)
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event !== null)
      if (event.container === event.previousContainer) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        const control = <FormArray> this.formObj.controls['fields'];
        control.removeAt(event.previousIndex)
        control.insert(event.currentIndex, this.frmGrop(event.container.data[event.currentIndex]));
        // console.log("formbuilder", this.canvasItems, this.formObj.value)

      } else {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        const control = <FormArray> this.formObj.controls['fields'];
        control.insert(event.currentIndex, this.frmGrop(event.previousContainer.data[event.previousIndex]))
        // console.log("formbuilder", this.canvasItems, this.formObj.value)
      }
  }

  updateFormObj(e) {
    console.log(e, this.controllerObj.index);
    const control = <FormArray> this.formObj.controls['fields'];
    control.removeAt(this.controllerObj.index)
    control.insert(this.controllerObj.index, this.frmGrop(e));
    this.canvasItems[this.controllerObj.index] = e;

    console.log("this.formObj.value", this.formObj.value, this.canvasItems);
    this.isControllerView = false;

    this.controllerObj = {
      index: 0,
      data: {},
      type: ""
    };
  }

  frmGrop(obj) {
    console.log(obj);

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

  controllerData(i) {
    this.isControllerView = true;
    this.controllerObj.index = i;
    this.controllerObj.type = this.formObj.controls['fields']['controls'][i].value.type;
    console.log(this.controllerObj.type)
    this.controllerObj.data = this.formObj.controls['fields']['controls'][i].value;
  }

  modeFor(t?) {
    this.isControllerView = true;
    this.controllerObj.type = 'CANVASVIEW';
    this.controllerObj.data = this.formObj.controls['fields'].value;
  }

}
