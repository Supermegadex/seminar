import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import * as md5 from 'md5';

@Component({
  selector: 'fluent-avatar',
  templateUrl: 'avatar.html',
  styleUrls: ['avatar.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FluentAvatarComponent implements OnInit {
  @Input() src = "";
  private emailRegex = new RegExp(["[a-z0-9!#$%&'*+/=?^_`{|}~-]+",
    "(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)",
    "*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+",
    "[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"].join(''));
  private urlRegex = new RegExp(["([a-z]{1,2}tps?):\\/\\/((((?!\\/).)+)(?:(\\/.+\\/))?",
    "(?:(((?!(\\.|$|\\?|#)).)+))?(?:(\\.((?!(\\?|$|#)).)+))?(?:(\\?.+))?(?:(#.+))?)"].join(''));
  url = "";

  constructor() {

  }

  ngOnInit() {
    this.formatSource();
  }

  formatSource() {
    if (this.emailRegex.test(this.src)) {
      this.url = `https://www.gravatar.com/avatar/${md5(this.src)}?d=retro`;
    }
    else if (this.urlRegex.test(this.src)) {
      this.url = this.src;
    }
    else {
      this.url = "http://via.placeholder.com/350x350";
    }
  }
}
