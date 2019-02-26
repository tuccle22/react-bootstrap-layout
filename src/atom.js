import React from 'react'
import { object } from 'prop-types'
import classNames from 'classnames'

Atom.propTypes = {
  m: object,
  p: object
}

function Atom(props) {
  const { 
    as, m, p, className, ...rest
  } = props

  const marginCss = m ? ' ' + getSpacingCss('m', m) : ''
  const paddingCss = p ? ' ' + getSpacingCss('p', p) : ''

  const El = as || 'div'
  const cssClasses = classNames(marginCss + paddingCss, {
    [className]: className
  })
  return <El className={cssClasses} {...rest} />
}

function getSpacingCss(type, sizes) {
  return Object.entries(sizes).reduce(
    (css, [side, size]) => `${css} ${type}${side}-${size}`.trim()
    , ''
  )
}

export default Atom