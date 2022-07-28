export interface QueryBuilder {
	toQueryMap: () => Map<string, string>
	toQueryString: () => string
}

export class QueryOptions implements QueryBuilder {
	public q: string | undefined
	public appid: string | undefined
	constructor() { }

	toQueryMap() {
		const queryMap = new Map<string, string>()
		
		if (this.q !== undefined) {
			queryMap.set('q', `${this.q}`);
		}
		if (this.appid !== undefined) {
			queryMap.set('appid', `${this.appid}`);
		}
		return queryMap
	}

	toQueryString() {
		let queryString = ''

		this.toQueryMap().forEach((value: string, key: string) => {
			queryString = queryString.concat(`${key}=${value}&`)
		})

		return queryString.substring(0, queryString.length - 1)
	}
}