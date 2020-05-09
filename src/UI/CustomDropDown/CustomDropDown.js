import React, { useState, useCallback, useEffect, useRef } from 'react';
import classes from './CustomDropDown.module.scss';

const CustomDropDown = props => {

    // DROPDOWN OPEN CLOSE STATE
    const [dropDownOpen, setDropDownOpen] = useState(false);
    // TEXT BOX STATE
    const [filterValue, setFilterValue] = useState("");
    // FILTERED DATA VALUES
    const [dataValues, setDataValues] = useState(props.dataValues)

    // THE PROP VALUES WE RECIEVE --- USECALLBACK RESTRICTIONS
    let propDataValues = props.dataValues;
    let searchable = props.searchable;
    let dropdownSelectedDisplay = props.dropdownSelectedDisplay;
    let multiselect = props.multiselect;
    let selectedValue = props.relSelected;
    let onChangeDropDownHandler = props.selected;

    useEffect(()=>{
        let filteredDataValues = propDataValues.filter((el)=>{
            var re = new RegExp(filterValue, "i", "g");
            return multiselect ? re.test(el.item) : re.test(el)
        })
        setDataValues(filteredDataValues)
    },[filterValue, propDataValues, multiselect])

    // DROPDOWN PANEL CONTENT........
    const ValuesPopulator = useCallback( () => {
        let content = [];

        if (multiselect) {
            content = dataValues.map((i, index) => {
                return (
                    <li key={index}> <input type="checkbox" 
                        checked={i.selected}
                        onChange={(e) => {
                            onChangeDropDownHandler(i.item)
                        }
                        }
                        style={{ cursor: "pointer" }} />
                        {i.item}
                    </li>
                )
            })
        }

        else {
            content = dataValues.map((i, index) => {
                return (
                    <li className={i === selectedValue ? classes.selectedList : null}
                        onClick={
                            (e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                onChangeDropDownHandler.bind(null, i)();
                                setDropDownOpen(false);
                            }}>
                        {i}
                    </li>
                )
             
            })
        }

        return (
            <ul>
                {content}
            </ul>
        )
    },[multiselect, onChangeDropDownHandler, selectedValue, dataValues])

    // TOGGLE DROPDOWN AND TEXTBOX BASED ON SEARCHABLE PROP
    const ToggleContent = useCallback(() => {
        if(dropDownOpen && searchable)
        {
            return <input type="search" autoFocus className={classes.textStyles} value={filterValue} onChange={(e)=>{setFilterValue(e.target.value)}}/>
        }
        return (
            <span className={classes.spanTitle} onClick={()=>{ if(!searchable){ setDropDownOpen(!dropDownOpen)} }}>
                {multiselect ? dropdownSelectedDisplay : selectedValue ? selectedValue : "CHOOSE..."}
            </span>
        )
    },[dropDownOpen,dropdownSelectedDisplay, filterValue, multiselect, searchable, selectedValue, setDropDownOpen])

    // THE FINAL JSX
    return (
        <div tabIndex={0} className={classes.wrapper}
            onClick={() => { setDropDownOpen(true) }}
            onBlur={event => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setDropDownOpen(false);
                    setFilterValue("");
                    setDataValues(propDataValues);
                }
            }}>
            <div className={classes.innerWrapper}>
                <ToggleContent></ToggleContent>
                <span className={dropDownOpen ? classes.iconStyles : classes.iconStylesRotate}>^</span>
            </div>
            <div className={classes.dropDownPanel} style={{ display: dropDownOpen ? "block" : "none" }}>
                <ValuesPopulator></ValuesPopulator>
            </div>
        </div>
    )
}

export default CustomDropDown;