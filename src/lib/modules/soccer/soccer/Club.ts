import type { Position } from "geojson";

export interface IClub {
    Name: string,
    League: string,
    Country: string,
    City: string,
    Stadium: string,
    /** The longitude and latitude of the club's stadium */
    StadiumLocation: Position,
}