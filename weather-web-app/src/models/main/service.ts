import { ResourceProvider } from "../../provider/resource.provider";
import { Main } from "./main";
import { MainSerializer } from "./serializer";



export class MainProvider extends ResourceProvider<Main> {
    constructor(){
        super("weather", new MainSerializer())
        
    }
}

export const mainService = new MainProvider();