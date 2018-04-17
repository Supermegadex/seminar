import { NgModule } from '@angular/core';
import { FluentAcrylicComponent } from './acrylic/acrylic';
import {CommonModule} from '@angular/common';
import {FluentNavViewComponent} from './list/list';
import {FluentItemComponent} from './item/item';
import {FluentHeaderComponent} from './header/header';

@NgModule({
  declarations: [
    FluentAcrylicComponent,
    FluentNavViewComponent,
    FluentItemComponent,
    FluentHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FluentAcrylicComponent,
    FluentNavViewComponent,
    FluentItemComponent,
    FluentHeaderComponent
  ]
})
export class FluentModule {}
