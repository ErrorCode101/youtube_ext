import {Component} from '@angular/core';

declare var YT: any;

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
})
export class PlayerComponent{

    player: YT.Player;
    public id: string = 'qDuKsiwS5xw';

    constructor(){
    }


    public savePlayer(player) {
        this.player = player;
        console.log('player instance', player);
    }

    public onStateChange(event) {
        console.log('player state', event.data);
    }

    private loadPlayer() {
        let tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';

        let firstScriptTag = document.getElementById('player')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    }
}
