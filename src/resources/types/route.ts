export enum FontType {
  menu = "menu",
  profile = "profile",
  notification = "notification",
  logout = "logout",
}

export enum RouteTagType {
  list = "list",
  link = "link",
  a = "a",
  event = "event",
}

export interface IRoute {
  name: string;
  path: string;
  type: FontType;
  tag: keyof typeof RouteTagType;
  target: string;
  list: IRoute[] | [];
}
