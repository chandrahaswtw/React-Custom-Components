import React, { useState, useEffect } from 'react';
import classes from './TreeView.module.scss';

const TreeView = props => {

    const [expandable, setExpandable] = useState("");
    const [data, setData] = useState(props.data)


    // DATA REFRESH IN CASE OF CHANGE
    var theData = props.data;
    useEffect(() => {
        let newExpandable = {}
        for (let i = 0; i < theData.length; i++) {
            newExpandable[i] = false
        }
        setExpandable(newExpandable);
        setData(theData);
    }, [theData])

    const DOMPopulator = () => {
        return theData.map((el, index) => {

            let childPopulator = el.children.map((el, index) => <span key={`child${index}`}>{el.name}</span>)

            return (
                <div className={classes.domainWrapper}>
                    <span className={classes.icon} onClick={onClickHandler.bind(null, index)}>></span>
                    <div>
                        <span className={classes.domainTitle}>{el.name}</span>
                        {expandable[index] ?
                            <div className={classes.appWrapper}>
                                {childPopulator}
                            </div> : null
                        }
                    </div>
                </div>
            )
        })
    }

    const onClickHandler = num => {
        setExpandable((prevState) => {
            return {
                ...prevState,
                [num]: !expandable[num]
            }
        })
    }

    return (
        <div>
            <DOMPopulator></DOMPopulator>
        </div>
    )
}

export default TreeView;