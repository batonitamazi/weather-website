import { Resource } from "../resource"


export class Weather extends Resource {
    main: string  | undefined 
    description: string | undefined
    icon: string | undefined 
}

