import { Component, ViewEncapsulation, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'fluent-input',
  templateUrl: 'input.html',
  styleUrls: ['input.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FluentInputComponent {
  @Input() placeholder = "";
  @Input() value = "";
  @Input() border = true;
  @Output() valueChange = new EventEmitter();

  changeText(val) {
    this.valueChange.emit(val);
  }

  getClasses() {
    const classes = [];
    if (this.border) classes.push('border');
    return classes;
  }
}
