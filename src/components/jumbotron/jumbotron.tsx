import './jumbotron.scss'

import React from 'react'
import PropTypes from 'prop-types'

interface Props {
    additionalComponent?: any,
    subtitle: string,
    title: string
}

const propTypes = {
    additionalComponent: PropTypes.node,
    subtitle: PropTypes.string,
    title: PropTypes.string
}

const Jumbotron = (props: Props) => {
    const { additionalComponent, subtitle, title } = props
    const baseClassName = 'dm-jumbotron'

    return (
        <div className={baseClassName}>
            <h1 className={baseClassName + '__title'}>
                {title}
            </h1>
            <h2 className={baseClassName + '__subtitle'}>
                {subtitle}
            </h2>
            {additionalComponent && (
                <div className={baseClassName + '__additional'}>
                    {additionalComponent}
                </div>
            )}
        </div>
    )
}

Jumbotron.propTypes = propTypes

export default Jumbotron
