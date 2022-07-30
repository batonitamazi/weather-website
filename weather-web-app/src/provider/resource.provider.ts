import axios from "axios";
import { environment } from "../environment/environment";
import { QueryOptions } from "../helpers/query.options";
import { Resource } from "../models/resource";
import { Serializer } from "../models/serializer";



export class ResourceProvider<T extends Resource> {
    constructor(public endpoint: string, public serializer: Serializer) { }
    public list = async (options: QueryOptions) => new Promise((resolve, reject) => {
        axios.get(`${environment.basePath}/${
            this.endpoint
          }?${options?.toQueryString()}`).then((resp)=> resolve(this.convertList(resp.data))).catch((error) => reject(error))   
     })
    private convert(data: any): any {
        return this.serializer.fromJson(data.weather);
    }
    private convertList(data: any, endpoint = ""): any {  
        return {
          resultsMain: data.main,
          results: data.weather.map((item: any) => this.serializer.fromJson(item)),
          cityName: data.name,
        };
    }
    
}