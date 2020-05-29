import { Injectable, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DropzonesService {
  dataSource = new BehaviorSubject<any>(null);

  constructor(
  ) { }

  test(event) {
    this.dataSource.next(event);
  }

}
