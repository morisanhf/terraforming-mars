
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";
import { IProjectCard } from "./IProjectCard";

export class AdvancedEcosystems implements IProjectCard {
    public cost: number = 11;
    public tags: Array<Tags> = [Tags.PLANT, Tags.MICROBES, Tags.ANIMAL];
    public cardType: CardType = CardType.AUTOMATED;
    public name: string = "Advanced Ecosystems";
    public text: string = "Requires a plant tag, a microbe tag, and an animal tag. Gain 3 victory points.";
    public description: string = "Constructing functional, dynamic ecosystems requires many ingredients";
    public play(player: Player, game: Game): Promise<void> {
        return new Promise((resolve, reject) => {
            if (player.getTagCount(Tags.PLANT) === 0 ||
                player.getTagCount(Tags.MICROBES) === 0 ||
                player.getTagCount(Tags.ANIMAL) === 0) {
                reject("Requires a plant tag, a microbe tag, and an animal tag");
                return;
            }
            player.victoryPoints += 3;
            resolve();
        });
    }
}