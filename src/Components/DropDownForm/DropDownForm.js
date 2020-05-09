import React, { useState } from 'react';
import classes from './DropDownForm.module.scss'
import CustomDropDown from './../../UI/CustomDropDown/CustomDropDown';
import {cloneDeep} from 'lodash'

const DropDownForm = props => {

    const [D, setD] = useState({
        D1: {
            options: ["ONE","TWO","THREE","FOUR"],
            value: ""
        },

        D2: {
            options: [{item : "ONE", selected : false},{item : "TWO", selected : false},{item : "THREE", selected : false},{item : "FOUR", selected : false}],
        },


        D3: {
            options: ["ONE","TWO","THREE","FOUR"],
            value: ""
        },


        D4: {
            options: [{item : "ONE", selected : false},{item : "TWO", selected : false},{item : "THREE", selected : false},{item : "FOUR", selected : false}],
        },

    });

    const D1ChangeHandler = (value) => {
        var DClone = cloneDeep(D);
        DClone.D1.value = value;
        setD(DClone);
    }

    const D2ChangeHandler = (value) => {
        console.log(value);
    }

    const D3ChangeHandler = (value) => {
        console.log("D3value", value)
        var DClone = cloneDeep(D);
        DClone.D3.value = value;
        setD(DClone);
    }

    const D4ChangeHandler = (value) => {
        console.log(value);
    }


    return (

        <div className={classes.wrapper}>

            <p className={classes.para} >DROPDOWN</p>
            <CustomDropDown dataValues={D.D1.options} selected={D1ChangeHandler} relSelected={D.D1.value}></CustomDropDown>

            <p className={classes.para}>DROPDOWN WITH MULTI SELECT</p>
            <CustomDropDown dataValues={D.D2.options} selected={D2ChangeHandler} relSelected={D.D1.value} multiselect dropdownSelectedDisplay="TEST"></CustomDropDown>

            <p className={classes.para} >DROPDOWN</p>
            <CustomDropDown dataValues={D.D3.options} selected={D3ChangeHandler} relSelected={D.D3.value} searchable></CustomDropDown>

            <p className={classes.para}>DROPDOWN WITH MULTI SELECT</p>
            <CustomDropDown dataValues={D.D4.options} selected={D4ChangeHandler} relSelected={D.D4.value} searchable multiselect dropdownSelectedDisplay="TEST"></CustomDropDown>


            <br/><br/><br/><br/><br/>

        </div>

    )
}

export default DropDownForm;