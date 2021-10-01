import type { Position } from "geojson";
import type { HomeAway } from "../soccer/HomeAway";

export interface IUsSoccerFixture {
    /** Date and Time of Kickoff */
    KickoffTime: Date,
    City: string,
    Stadium: string,
    /** A number array with 2 items referring to the longitude and latitude of the fixture.  */
    LocationLngLat: Position,
    Opponent: string,
    HomeAway: HomeAway,
    Notes: string[],
}