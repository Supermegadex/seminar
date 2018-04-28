import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'fluent-item',
  templateUrl: 'item.html',
  styleUrls: ['item.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FluentItemComponent {
  @Input() active = false;
  @Input() text = '';
}
