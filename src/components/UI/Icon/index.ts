import { createElement, useEffect, useState } from 'react'

import { mapIcons } from './mapper'
import { IDimensionsProps, IProps, IViewProps, typeIcons } from './types'

import View from './view'

const IconContainer = ({ title, name, width, height, onCallback }: IProps) => {
  const [iconElement, setIconElement] = useState(undefined)
  const [iconDimensions, setIconDimensions] = useState<IDimensionsProps>({
    width: 0,
    height: 0,
  })

  const setDimensions = (dimensions) => {
    if (width && height) {
      setIconDimensions({ width, height })
      return
    }

    setIconDimensions(dimensions)
  }

  const prepareIconSVG = (icon) => {
    setIconElement(icon.element)
    setDimensions(icon.dimensions)
  }
  const prepareIconPNG = (icon) => {
    setIconElement(icon.element)
    setDimensions(icon.dimensions)
  }

  const actionsByType = {
    [typeIcons.SVG]: (icon: any) => prepareIconSVG(icon),
    [typeIcons.PNG]: (icon: any) => prepareIconPNG(icon),
  }

  const getIcon = () => {
    try {
      const icon = mapIcons.find((item) => item.name === name)
      if (!icon) return

      const type: typeIcons = icon?.type

      actionsByType[type](icon)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIcon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const viewProps: IViewProps = {
    title,
    element: iconElement,
    dimensions: iconDimensions,
    onCallback,
  }

  return createElement(View, viewProps)
}

export default IconContainer
