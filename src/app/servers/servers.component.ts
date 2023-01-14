import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created.';
  serverName: string = '';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created.';
  }

  onUpdateServerName(event: Event) {
    console.log('Input event: ', event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
