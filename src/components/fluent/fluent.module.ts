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
import { FluentIconComponent } from './icon/icon';
import { FluentFlyoutComponent } from './flyout/flyout';

@NgModule({
  declarations: [
    FluentNavViewComponent,
    FluentItemComponent,
    FluentHeaderComponent,
    FluentInputComponent,
    FluentAvatarComponent,
    FluentIconComponent,
    FluentFlyoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FluentNavViewComponent,
    FluentItemComponent,
    FluentHeaderComponent,
    FluentInputComponent,
    FluentAvatarComponent,
    FluentIconComponent,
    FluentFlyoutComponent
  ]
})
export class FluentModule {}
