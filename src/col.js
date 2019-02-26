import React from 'react'
import { oneOfType, bool, number, string, shape, object } from 'prop-types'
import classNames from 'classnames'
import Atom from './atom'

Col.propTypes = {
  xs: oneOfType([bool, number]),
  sm: oneOfType([bool, number]),
  md: oneOfType([bool, number]),
  lg: oneOfType([bool, number]),
  xl: oneOfType([bool, number]),
  order: oneOfType([string, number]),
  offset: object, // {md: 8, xs: 2}
}

function Col(props) {
  const { xs, sm, md, lg, xl, order, offset, className, ...rest } = props;

  const sizeCss = getSizesCss({ xs, sm, md, lg, xl })
  const offsetCss = offset ? ' ' + getOffsetCss(offset) : ''

  const cssClasses = classNames(
    sizeCss + offsetCss,
    { [className]: className,
      ['order-' + order]: order
    }
  )

  return <Atom className={cssClasses} {...rest} />
}

// {md: 8, xs: 2}
function getOffsetCss(offset) {
  return Object.entries(offset).reduce(
    (css, offset) => css + ['offset', ...offset].join('-')
  ), ''
}

// {md: 8, xs: 2}
function getSizesCss(sizes) {
  return Object.entries(sizes)
    .reduce((css, size) => {
      const [bp, num] = size
      switch(true) {
        case num === true:
          return `${css} col-${bp}`
        case num <= 12:
          return `${css} ${['col', ...size].join('-')}`
        default:
          return css
      }
    }, 'col')
}



export default Col