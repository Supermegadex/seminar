import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FluentAcrylicComponent } from './acrylic/acrylic';
import { CommonModule } from '@angular/common';
import { FluentNavViewComponent } from './list/list';
import { FluentItemComponent } from './item/item';
import { FluentHeaderComponent } from './header/header';
import { FluentInputComponent } from './input/input';
import { FluentButtonComponent } from './button/button';
import { FluentAvatarComponent } from './avatar/avatar';

@NgModule({
  declarations: [
    FluentAcrylicComponent,
    FluentNavViewComponent,
    FluentItemComponent,
    FluentHeaderComponent,
    FluentInputComponent,
    FluentButtonComponent,
    FluentAvatarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FluentAcrylicComponent,
    FluentNavViewComponent,
    FluentItemComponent,
    FluentHeaderComponent,
    FluentInputComponent,
    FluentButtonComponent,
    FluentAvatarComponent
  ]
})
export class FluentModule {}
