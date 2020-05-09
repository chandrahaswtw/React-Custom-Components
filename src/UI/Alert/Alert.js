import React from 'react';
import classes from './Alert.module.scss';
import { CSSTransition } from 'react-transition-group';

const Alert = props => {

    let AlertClass = null;
    switch (props.type) {
        case "success":
            AlertClass = classes.successAlert;
            break;
        case "danger":
            AlertClass = classes.dangerAlert;
            break;
        case "info":
            AlertClass = classes.infoAlert;
            break;
        default:
            break;
    }

    return (
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={500}
            classNames={{
                enter: classes.enter,
                enterActive: classes.enterActive,
                exit: classes.exit,
                exitActive: classes.exitActive
            }}>
            {state =>
                <div className={AlertClass}>
                    <div className={classes.leftIcon}>
                        <span>@</span>
                    </div>
                    <div className={classes.textWrapper}>
                        <span>{props.children}</span>
                    </div>
                    <div className={classes.rightIcon}>
                        <span onClick={props.closeHandler}>X</span>
                    </div>
                </div>}
        </CSSTransition>
    )
}

export default Alert