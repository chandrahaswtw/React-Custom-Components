import React from 'react';
import classes from './ToolTip.module.scss';

const ToolTip = props => {

    return (
        <div className={classes.wrapper}>
            <div>{props.children}</div>
            <div className={classes.toolBox}>
                <span className={classes.toolTipText}>{props.content}</span>
            </div>
        </div>
    )
}

export default ToolTip;