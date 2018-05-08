import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fluent-icon',
  templateUrl: 'icon.html',
  styleUrls: ['icon.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FluentIconComponent {
  @Input() name: string;
}
