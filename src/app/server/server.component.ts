import { Component } from '@angular/core';

// adding decorator
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(): string {
        return this.serverStatus;
    };
}