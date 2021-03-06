import './page.scss'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Loading } from '..';

interface Props {
    backdrop?: string,
    children: any,
    className?: string,
    isPaddedTop?: boolean,
    isLoading?: boolean,
}

const propTypes = {
    backdrop: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    isPaddedTop: PropTypes.bool,
    isLoading: PropTypes.bool
}

const defaultProps = {
    isPaddedTop: true,
    isLoading: false
}

const Page = (props: Props) => {
    const { children, className, isPaddedTop, isLoading, backdrop } = props
    const baseClassName = 'dm-page'
    const mainClassName = classnames(baseClassName, className, {
        [baseClassName + '--padded-top']: isPaddedTop
    })

    return (
        <div className={mainClassName}>
            {isLoading && <Loading />}
            <nav className={baseClassName + '__navbar'}>
                <ul className={baseClassName + '__container'}>
                    <li className={baseClassName + '__navbar-title'}>
                        🎬 discover movies
                    </li>
                </ul>
            </nav>
            {backdrop && (
                <div
                    style={{
                        backgroundImage: `url("${backdrop}")`
                    }}
                    className={baseClassName + '__backdrop'}
                />
            )}
            <div className={baseClassName + '__container'}>
                {children}
            </div>
        </div>
    )
}

Page.propTypes = propTypes
Page.defaultProps = defaultProps

export default Page
