import { Resource } from "../resource";
import { Serializer } from "../serializer";
import { Weather } from "./weather";


export class WeatherSerializer implements Serializer {
    fromJson(json: any){
        const weather = new Weather()
        weather.id = json.id 
        weather.main = json.main 
        weather.description = json.description 
        weather.icon = json.icon
        return weather 
    }
    toJson(item: Weather) {
    }
}