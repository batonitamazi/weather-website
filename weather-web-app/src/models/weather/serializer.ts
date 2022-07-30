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
        // weather.temp = json.temp
        // weather.feels_like = json.feels_like
        // weather.temp_min = json.temp_min
        // weather.temp_max = json.temp_max
        // weather.pressure = json.pressure 
        // weather.humidity = json.humidity
        return weather 
    }
    toJson(item: Weather) {
    }
}