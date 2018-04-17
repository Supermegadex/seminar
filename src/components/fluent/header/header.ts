import {Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'fluent-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FluentHeaderComponent implements OnInit, OnChanges {
  @Input() size = 2;
  @Input() hasSub = false;
  classes = [];

  ngOnInit() {
    this.classes.push('header-' + this.size);
    if (this.hasSub) {
      this.classes.push('has-subtitle');
    }
  }

  ngOnChanges() {
    if (this.hasSub && !this.classes[1]) {
      this.classes.push('has-subtitle');
    }
    else if (this.classes[1]) {
      this.classes.pop();
    }
  }
}
