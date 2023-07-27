export interface IKeyArgHeader {
  index: number
  field: string
}

export interface IArgsApiHeader {
  authorization: IKeyArgHeader
}

export interface IServiceContants {
  argsApiHeader: IArgsApiHeader
}
