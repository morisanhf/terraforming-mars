import { IGlobalEvent } from './IGlobalEvent';
import { GlobalEventName } from './GlobalEventName';
import { PartyName } from '../parties/PartyName';
import { Game } from '../../Game';
import { Resources } from '../../Resources';
import { Tags } from '../../cards/Tags';
import { Turmoil } from '../Turmoil';

export class MinersOnStrike implements IGlobalEvent {
    public name = GlobalEventName.MINERS_ON_STRIKE;
    public revealedDelegate = PartyName.MARS;
    public currentDelegate = PartyName.GREENS;
    public resolve(game: Game, turmoil: Turmoil) {
        game.getPlayers().forEach(player => {
            let amount = Math.min(5, player.getTagCount(Tags.JOVIAN, false, false)) - turmoil.getPlayerInfluence(player);
            if (amount > 0) {
                player.setResource(Resources.TITANIUM, -amount, undefined, undefined, true);
            }
        });    
    }
}    