import {Component, ContentChildren, EventEmitter, Input, Output, QueryList} from '@angular/core';
import {FluentItemComponent} from '../item/item';

@Component({
  selector: 'fluent-nav-view',
  templateUrl: 'list.html'
})
export class FluentNavViewComponent {
  @Input() selection = -1;
  @Output() selectionChange: EventEmitter<number> = new EventEmitter();

  @ContentChildren(FluentItemComponent) items: QueryList<FluentItemComponent>;

  activeItem = -1;

  constructor() {}

  clickItem(e) {
    this.selection = e;
    this.selectionChange.emit(e);
  }
}
