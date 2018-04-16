import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'fluent-acrylic',
  templateUrl: 'acrylic.html',
  styleUrls: ['./acrylic.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FluentAcrylicComponent implements OnInit {

  constructor() { }
  @Input() padding;

  ngOnInit() {
  }

}
