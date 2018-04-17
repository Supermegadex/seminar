import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  channels = [
    {
      name: 'Start',
      messages: [
        {
          text: "Hello",
          author: {
            name: "Daniel",
            email: "delpinothedragon1@hotmail.com"
          }
        },
        {
          text: "Hey",
          author: {
            name: "Daniel",
            email: "delpinothedragon1@hotmail.com"
          }
        }
      ]
    },
    {
      name: 'Goodbye',
      messages: [
        {
          text: "Whee",
          author: {
            name: "Daniel",
            email: "delpinothedragon1@hotmail.com"
          }
        },
        {
          text: "Wowza",
          author: {
            name: "Daniel",
            email: "delpinothedragon1@hotmail.com"
          }
        }
      ]
    }
  ];
  currentChannel = -1;

  people = [
    ["Daniel", "delpinothedragon1@hotmail.com"],
    ["Ben", "benwingerter01@gmail.com"],
    ["Aaron", "aaronfilipi@gmail.com"],
    ["Andy", "andy.noon@hotmail.com"]
  ];

  constructor() {}
}
