import React from 'react'
import {Helmet} from 'react-helmet'

const Metadata = ({title}) => {
    return (
        <Helmet>
            <title>{`${title} - VetyShop`}</title>
        </Helmet>
    )
}
export default Metadata