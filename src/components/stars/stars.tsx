import './stars.scss'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

interface Props {
    rating: number
}

const propTypes = {
    rating: PropTypes.number
}

const Stars = (props: Props) => {
    const { rating } = props
    const baseClassName = 'dm-stars'
    const filledStarClassName = baseClassName + '__star'
    const emptyStarClassName = classnames(
        filledStarClassName,
        filledStarClassName + '--empty'
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

    return (
        <span className={baseClassName} title={`${rating/2} of 5 stars`}>
            {stars}
        </span>
    )
}

Stars.propTypes = propTypes

export default Stars
