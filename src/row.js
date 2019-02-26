import React from 'react'
import { bool } from 'prop-types';
import classNames from 'classnames'
import Atom from './atom'

function Row(props) {
  const { className, ...rest } = props
  const cssClasses = classNames('row', {[className]: className})

  return <Atom className={cssClasses} {...rest} />
}

Row.propTypes = {
  noGutters: bool
}

export default Row