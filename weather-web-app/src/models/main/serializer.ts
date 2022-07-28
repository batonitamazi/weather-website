import { Resource } from "../resource";
import { Serializer } from "../serializer";
import { WeatherSerializer } from "../weather/serializer";
import { Main } from "./main";
import {Weather} from '../weather/weather'


export class MainSerializer implements Serializer {
    fromJson(json: any) {
        const main = new Main()
        
        return main
    }
    toJson(item: Main) {
    }
}