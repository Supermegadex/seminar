import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SocketService } from '../providers/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SocketService],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  channels = [];
  currentChannel = -1;
  channelNames = [];
  serverName = "Welcome!";

  name = "";
  email = "";
  newServerName = "";
  joinServerId = "";
  messageText = "";
  channelToSendMessage = "";
  newChannelName = "";
  serverId = "";
  enableMessages = false;
  enableIntro = true;

  introPartOneClass = "";
  partOneEnabled = true;
  introPartTwoClass = "";
  partTwoEnabled = false;

  people = [];

  constructor(private socket: SocketService) {}

  ngOnInit() {
    this.socket.onNewMessage().subscribe(data => {
      console.log(data);
      this.channels.find(channel => channel.id === data.channel).messages.push(data.message);
    });

    this.socket.onNewMember().subscribe(data => {
      console.log(data.id)
      console.log(this.people.find(person => person.id === data.id));
      if (!this.people.find(person => person.id !== data.id)) this.people.push({
        name: data.name,
        email: data.email,
        id: data.id
      });
    });

    this.socket.onNewChannel().subscribe(data => {
      this.pushChannel(data.name);
    });

    console.log(localStorage.getItem('token'));

    if (localStorage.getItem('token')) {
      console.log("HAI");
      this.socket.LoginWithToken(localStorage.getItem("token")).then((user: any) => {
        console.log(user);
        this.name = user.name;
        this.email = user.email;
        this.moveToPart2();
      }).catch(err => {
        console.log('whoops');
      });
    }
  }

  login() {
    this.socket.Login(this.name, this.email).then((token: string) => {
      localStorage.setItem('token', token);
      this.moveToPart2();
    }).catch(err => {
      console.log('whoops');
    });
  }

  moveToPart2() {
    this.introPartOneClass = "dismiss";
    this.partTwoEnabled = true;
    setTimeout(() => {
      this.partOneEnabled = false;
    }, 500);
  }

  create() {
    console.log("create: ", this.newServerName);
    this.socket.Create(this.newServerName).then((data: any) => {
      this.serverId = data.id;
      this.serverName = data.server.name;
      this.introPartTwoClass = "dismiss";
      setTimeout(() => {
        this.channels = data.server.channels;
        this.people = data.server.people.map(member => {
          return {
            name: member.name,
            email: member.email,
            id: member.id
          };
        });
        this.currentChannel = 0;
        this.enableMessages = true;
        this.enableIntro = false;
      }, 500);
    }).catch(err => {
      console.log('whoops');
    });
  }

  join() {
    console.log("join: ", this.joinServerId);
    this.socket.Join(this.joinServerId).then((data: any) => {
      this.serverName = data.name;
      this.serverId = this.joinServerId;
      this.introPartTwoClass = "dismiss";
      setTimeout(() => {
        this.channels = data.channels;
        this.people = data.people.map(member => {
          return {
            name: member.name,
            email: member.email,
            id: member.id
          };
        });
        this.currentChannel = 0;
        this.enableMessages = true;
        this.enableIntro = false;
        console.log(this.channels);
      }, 500);
    }).catch(err => {
      console.log('whoops');
    });
  }

  sendMessage() {
    console.log(this.channels[this.currentChannel]);
    this.socket.SendMessage(this.messageText, this.channels[this.currentChannel].id).then((data: any) => {
      this.channels[this.currentChannel].messages.push(data.message);
      this.messageText = "";
    }).catch(err => {
      console.log(err);
      console.log('whoops');
    });
  }

  newChannel() {
    this.socket.CreateChannel(this.newChannelName).then((name: any) => {
      this.pushChannel(name);
    }).catch(err => {
      console.log(err);
      console.log('whoops');
    });
  }

  pushChannel(name) {
    this.channelNames.push(name);
    this.channels.push({
      name,
      messages: []
    });
  }

  formatChannels(channels) {
    this.channelNames = Object.keys(channels);
    const tempChannels = [];
    for (const name of this.channelNames) {
      tempChannels.push({
        ...channels[name],
        name: name
      });
    }
    return tempChannels;
  }
}
