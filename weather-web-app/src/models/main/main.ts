import { Resource } from "../resource";
import { Weather } from "../weather/weather";


export class Main extends Resource {
    weather: Weather | undefined
}