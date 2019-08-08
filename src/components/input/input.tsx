import './input.scss'

import React from 'react'

interface Props {
    placeholder: string
}

const propTypes = {

}

const Input = (props: Props) => {
    const className = 'dm-input'

    return (
        <input className={className} {...props} />
    )
}

Input.propTypes = propTypes

export default Input
