import './loading.scss'

import React from 'react'

const Loading = () => {
    const baseClassName = 'dm-loading'

    return (
        <div className={baseClassName}>
            <div className={baseClassName + '__animated-bar'} />
        </div>
    )
}

export default Loading
