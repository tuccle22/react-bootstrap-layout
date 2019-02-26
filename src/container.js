import React from 'react'
import { bool } from 'prop-types'
import classNames from 'classnames'
import Atom from './atom';


Container.propTypes = {
  fluid: bool
}

function Container({fluid, ...rest}) {
  
  const cssClasses = classNames({
    'container-fluid': fluid,
    'container': !fluid
  })

  return <Atom className={cssClasses} {...rest} />
}

export default Container