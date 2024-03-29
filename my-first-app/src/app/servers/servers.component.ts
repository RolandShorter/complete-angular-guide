import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '//<app-server></app-server>//<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
  }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!' + this.serverName;
  }

  onUpdateServerName(event: any) {
   this.serverName = event.target.value;
   console.log(event);
}
}
