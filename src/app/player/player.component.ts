import {Component} from '@angular/core';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent {

    player: YT.Player;
    public id: string = 'qDuKsiwS5xw';

    constructor() {
    }

    public savePlayer(player) {
        this.player = player;
        console.log('player instance', player);
    }

    public onStateChange(event) {
        console.log('player state', event.data);
    }

}
