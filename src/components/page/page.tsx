import './page.scss'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

interface Props {
    children: any,
    className?: string,
    isPaddedTop?: boolean,
}

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    isPaddedTop: PropTypes.bool
}

const defaultProps = {
    isPaddedTop: true
}

const Page = (props: Props) => {
    const { children, className, isPaddedTop } = props
    const baseClassName = 'dm-page'
    const mainClassName = classnames(baseClassName, className, {
        [baseClassName + '--padded-top']: isPaddedTop
    })

    return (
        <div className={mainClassName}>
            <nav className={baseClassName + '__navbar'}>
                <ul className={baseClassName + '__container'}>
                    <li className={baseClassName + '__navbar-title'}>
                        🎬 discover movies
                    </li>
                </ul>
            </nav>
            <div className={baseClassName + '__container'}>
                {children}
            </div>
        </div>
    )
}

Page.propTypes = propTypes
Page.defaultProps = defaultProps

export default Page
