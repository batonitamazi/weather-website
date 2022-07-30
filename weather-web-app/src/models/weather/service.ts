import { ResourceProvider } from "../../provider/resource.provider";
import { Weather } from "./weather";
import { WeatherSerializer } from "./serializer";



export class WeatherProvider extends ResourceProvider<Weather> {
    constructor(){
        super("weather", new WeatherSerializer())
    }
}

export const weatherService = new WeatherProvider();