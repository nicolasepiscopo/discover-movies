import React from 'react'

interface Props {
    path: string,
    default: boolean
}

const NotFound = (props: Props) => {
    return (
        <div className={'dm-not-found'}>
            404 - Not Found
        </div>
    )
}

export default NotFound
