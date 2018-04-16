import { NgModule } from '@angular/core';
import { FluentAcrylicComponent } from './acrylic/acrylic';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    FluentAcrylicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FluentAcrylicComponent
  ]
})
export class FluentModule {}
