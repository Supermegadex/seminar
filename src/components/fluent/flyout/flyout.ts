import { Component, Input } from "@angular/core";

@Component({
  selector: 'fluent-flyout',
  templateUrl: 'flyout.html',
})
export class FluentFlyoutComponent {
  @Input() element;
  private visible = false;
  style = {

  };

  public show() {
    this.visible = true;
  }

  public hide() {
    this.visible = false;
  }
}
