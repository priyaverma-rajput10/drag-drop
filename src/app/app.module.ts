import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatSidenavModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { CanvasComponent } from './canvas/canvas.component';
import { DrawerComponent } from './drawer/drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropzonesService } from './dropzones.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputBoxComponent } from './controls/input-box/input-box.component';
import { SelectComponent } from './controls/select/select.component';
import { TextareaComponent } from './controls/textarea/textarea.component';
import { CanvasViewComponent } from './canvas-view/canvas-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    DrawerComponent,
    InputBoxComponent,
    SelectComponent,
    TextareaComponent,
    CanvasViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,MatFormFieldModule,
    MatInputModule,
    MatIconModule, ReactiveFormsModule,
    FormsModule,
  ],
  exports: [DragDropModule, MatSidenavModule,MatFormFieldModule,
    MatInputModule,],
  providers: [DropzonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
