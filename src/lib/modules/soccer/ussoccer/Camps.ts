import type { Position } from "geojson";
import type { IPlayerCallup } from "./PlayerCallup";

export interface ICamps {
    Name: string,
    StartDate: string, //todo convert this to a Date Object eventually
    EndDate: string, //todo convert this to a Date Object eventually
    /** City that the camp primarily is based in */
    Location: string,
    /** A number array with 2 items referring to the longitude and latitude of the camp.  */
    LocationLngLat: Position,
    Event: string,
    FixtureDates: string[], //todo convert this to a Date[] Object eventually
    Manager: string,
    Roster: IPlayerCallup[],
    Notes: string[]
}