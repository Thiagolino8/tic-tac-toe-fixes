import type { Player } from "./player";

export class Cell {
    public value: 'X' | 'O' | null = null;

    constructor(public readonly index: number) { }

    mark(player: Player): boolean {
        if (this.value === null) {
            this.value = player;
            return true;
        }
        return false;
    }
}
