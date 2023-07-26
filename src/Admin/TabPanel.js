import React,{useState, useEffect} from 'react';

const TabPanel = (props) => {
    const {children, value, index} = props;

    return (
        <React.Fragment>
            {
                value == index &&
                (
                    <p>{children}</p>
                )
            }
        </React.Fragment>
    )
}

export default TabPanel