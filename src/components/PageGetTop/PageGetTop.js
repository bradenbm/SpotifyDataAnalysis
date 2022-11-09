import React, { useEffect, useState } from "react";
import './PageGetTop.css';
import ButtonGetTop from "../ButtonGetTop/ButtonGetTop";
import Dropdown from "../Dropdown";

const TYPES = [
    {value: 'tracks', name: 'Songs'},
    {value: 'artists', name: 'Artists'}
];

const TIMES = [
    {value: 'short_term', name: 'Past Month'},
    {value: 'medium_term', name: 'Past 6 Months'},
    {value: 'long_term', name: 'All Time'}
];

let NUMS = [];
for (let i = 1; i <= 50; i++) {
    NUMS.push(
        {value: i, name: i}
    );
}

const getReturnedParams = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});

    return paramsSplitUp;
};


const PageGetTop = () => {
    const [type, setType] = useState({selectedType: TYPES[0].value});
    const [limit, setLimit] = useState({selectedLimit: NUMS[9].value});
    const [time, setTime] = useState({selectedTime: TIMES[0].value});
    const [offset, setOffset] = useState({selectedOffset: NUMS[0].value});



    useEffect(() => {
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type 
            } = getReturnedParams(window.location.hash);
            
            localStorage.clear();

            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('expiresIn', expires_in);
            localStorage.setItem('tokenType', token_type);
        }

        setType({selectedType: type.selectedType});
        setLimit({selectedLimit: limit.selectedLimit});
        setTime({selectedTime: time.selectedTime});
        setOffset({selectedOffset: offset.selectedOffset});

    }
        , [type.selectedType, limit.selectedLimit, time.selectedTime, offset.selectedOffset]);

    const typeChanged = (val) => {
        setType({selectedType: val});
    };
    const limitChanged = (val) => {
        setLimit({selectedLimit: val});
    };
    const timeChanged = (val) => {
        setTime({selectedTime: val});
    };
    const offsetChanged = (val) => {
        setOffset({selectedOffset: val});
    };

    
    //Page HTML
    return(
        <div className="DataPage">
            <h1>Find your top songs and artists!</h1>

            <div className="row">
                <Dropdown label="Songs or Artists:" items={TYPES} selectedValue={type.selectedType}     changed={typeChanged}/>
                <Dropdown label="Amount to Show:"   items={NUMS}  selectedValue={limit.selectedLimit}   changed={limitChanged}/>
                <Dropdown label="Time Frame:"       items={TIMES} selectedValue={time.selectedTime}     changed={timeChanged}/>
                <Dropdown label="Start at:"         items={NUMS}  selectedValue={offset.selectedOffset} changed={offsetChanged}/>
            </div>

            {/* onMouseDown="if(this.options.length>8){this.size=8;}" onChange='this.size=0;' onBlur="this.size=0;" */}
            <ButtonGetTop type={type.selectedType} limit={limit.selectedLimit} time={time.selectedTime} offset={offset.selectedOffset}/>
        </div>
    );
};

export default PageGetTop;