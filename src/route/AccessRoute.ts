import { FontType, RouteTagType, IRoute } from '@resources/types/route'

export const AccessRoutes = () => {
  const privateRoutes: IRoute[] = [
    {
      tag: RouteTagType.list,
      target: '',
      name: 'Menu',
      path: '',
      type: FontType.menu,
      list: [],
    },
  ]

  return privateRoutes
}
