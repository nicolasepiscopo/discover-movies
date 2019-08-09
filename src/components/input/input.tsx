import './input.scss'

import React from 'react'
import PropTypes from 'prop-types'

interface Props {
    onChange?: any,
    placeholder: string,
}

const propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
}

const Input = (props: Props) => {
    const className = 'dm-input'

    return (
        <input className={className} {...props} />
    )
}

Input.propTypes = propTypes

export default Input
