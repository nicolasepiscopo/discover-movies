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
            <div className={baseClassName + '__title'}>
                {title}
            </div>
            <div className={baseClassName + '__subtitle'}>
                {subtitle}
            </div>
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
