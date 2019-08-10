import './poster.scss'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

interface Props {
    src: string,
    title: string,
    rating: number,
    onClick?: Function
}

const propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    onClick: PropTypes.func
}

const Poster = (props: Props) => {
    const { src, title, rating, onClick } = props
    const baseClassName = 'dm-poster'
    const mainClassName = classnames(
        baseClassName,
        {
            [baseClassName + '--as-button']: !!onClick
        }
    )
    const infoClassName = classnames(
        baseClassName + '__info',
    )
    const filledStarClassName = baseClassName + '__star'
    const emptyStarClassName = classnames(
        filledStarClassName,
        baseClassName + '__star--empty'
    )
    const possibleRatings = [1, 2, 3, 4, 5]
    let stars: any[] = []

    possibleRatings.forEach(rate => {
        stars.push(rate <= parseInt(`${rating/2}`) ? (
            <span key={rate} className={filledStarClassName}>⭑</span>
        ) : (
            <span key={rate} className={emptyStarClassName}>⭒</span>
        ))
    })

    let buttonProps = {}

    if (onClick) {
        buttonProps = {
            role: 'button',
            onClick: onClick
        }
    }

    return (
        <div className={mainClassName} {...buttonProps}>
            <img className={baseClassName + '__image'} src={src} alt={title} />
            <div className={infoClassName}>
                <div className={baseClassName + '__title'}>
                    {title}
                </div>
                <div className={baseClassName + '__rating'}>
                    {stars}
                </div>
            </div>
        </div>
    )
}

Poster.propTypes = propTypes

export default Poster
