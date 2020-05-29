import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  isDrawerOpen = true;
  // drop(event: CdkDragDrop<string[]>) {
  //   console.log(event.previousContainer == event.container);
  //   if (event.previousContainer !== event.container)
  //     if (event.previousContainer === event.container) {
  //       moveItemInArray(
  //         event.container.data,
  //         event.previousIndex,
  //         event.currentIndex
  //       );
  //     } else {
  //       copyArrayItem(
  //         event.previousContainer.data,
  //         event.container.data,
  //         event.previousIndex,
  //         event.currentIndex
  //       );
  //       console.log("formbuilder", this.formbuilder)
  //     }
  // }
}
