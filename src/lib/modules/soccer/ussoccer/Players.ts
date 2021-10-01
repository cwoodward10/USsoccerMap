import type { PositionGroup } from "../soccer/PositionGroups";

export interface IPlayer {
    Name: string,
    Age: number,
    Birthday: string, //todo convert this to a Date Object eventually
    Hometown: string,
    Position: string[],
    PositionGroup: PositionGroup[],
}