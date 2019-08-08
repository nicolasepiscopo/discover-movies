import React from 'react'
import { Page, Jumbotron } from '../../components';

interface Props {
    path: string,
    default: boolean
}

const NotFound = (props: Props) => {
    const baseClassName = 'dm-not-found';

    return (
        <Page className={baseClassName}>
            <Jumbotron
                title="Not Found"
                subtitle="Oops.. it seems what you're looking for doesn't exist 😅"
            />
        </Page>
    )
}

export default NotFound
