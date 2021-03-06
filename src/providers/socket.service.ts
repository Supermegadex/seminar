import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  static loggedIn = false;
  static inServer = false;

  public socket: SocketIOClient.Socket;
  public debug = !environment.production;
  public serverCode = '';

  constructor() {
    this.debug = false;
    this.socket = io(this.debug ? 'localhost:3000' : 'https://api.back-chat.com');
    this.socket.on('disconnect', () => {
      if (SocketService.loggedIn) {
        this.socket.emit('login-token', localStorage.getItem('token'), (res, data) => {
          if (res) {
            if (SocketService.inServer) {
              this.socket.emit('join-server', this.serverCode, success => {
                console.log(success);
              });
            }
          }
        });
      }
    });
  }

  Login(name: string, email: string) {
    return new Promise((resolve, reject) => {
      this.socket.emit('login', {name, email}, (res: boolean, token?: string) => {
        if (res) {
          localStorage.setItem('token', token);
          SocketService.loggedIn = true;
          resolve(token);
        }
        else {
          reject(false);
        }
      });
    });
  }

  LoginWithToken(token: string) {
    return new Promise((resolve, reject) => {
      this.socket.emit('login-token', token, (res: boolean, user?: any) => {
        if (res) {
          SocketService.loggedIn = true;
          resolve(user.data);
        }
        else {
          reject(false);
        }
      });
    });
  }

  Join(id: string) {
    return new Promise((resolve, reject) => {
      this.socket.emit('join-server', id, (res: boolean, data?: string) => {
        if (res) {
          SocketService.inServer = true;
          this.serverCode = id;
          resolve(data);
        }
        else {
          reject(false);
        }
      });
    });
  }

  Create(name: string) {
    return new Promise((resolve, reject) => {
      this.socket.emit('create-server', name, (res: boolean, id?: string, server?: any) => {
        if (res) {
          SocketService.inServer = true;
          this.serverCode = id;
          resolve({id, server});
        }
        else {
          reject(false);
        }
      });
    });
  }

  SendMessage(text: string, channel: string) {
    return new Promise((resolve, reject) => {
      this.socket.emit('message', {text, channel}, (res: boolean, data?: string) => {
        console.log(res, data);
        if (res) {
          resolve(data);
        }
      });
    });
  }

  CreateChannel(name: string) {
    return new Promise((resolve, reject) => {
      this.socket.emit('add-channel', name, (res: boolean, data?: string) => {
        console.log(res, data);
        if (res) {
          resolve(data);
        }
      });
    });
  }

  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('message', data => {
        observer.next(data);
      });
    });
  }

  onNewMember() {
    return Observable.create(observer => {
      this.socket.on('member', data => {
        observer.next(data);
      });
    });
  }

  onNewChannel() {
    return Observable.create(observer => {
      this.socket.on('channel', data => {
        observer.next(data);
      });
    });
  }

  onMemberLeave() {
    return Observable.create(observer => {
      this.socket.on('user-disconnect', data => {
        observer.next(data);
      });
    });
  }
}
