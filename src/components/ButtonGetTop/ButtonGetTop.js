import React, { useEffect, useState } from "react";
import axios from 'axios';

import './ButtonGetTop.css';

const ButtonGetTop = props => {
    let index = 1;
    const [token, setToken] = useState('');
    const [data, setData] = useState({});

    const [temp, setTemp] = useState('');


    // let temp = '';

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem('accessToken'));
        }
    }, []);

    const handleGetData = () => {
        axios.get('https://api.spotify.com/v1/me/top/' + props.type, {
            headers: {
                Authorization: 'Bearer ' + token
            },
            params: {
                    limit: props.limit, //1-50
                    offset: props.offset-1, //0-49
                    time_range: props.time
            }
        }).then((response) => {

            console.log("Type: " + props.type + "\n" +
                        "Limit: " + props.limit + "\n" +
                        "Time: " + props.time + "\n" + 
                        "Offset: " + props.offset
            );

            //PARSE DATA HERE
            // for ()
            // for (let i = 0; i < 4; i++) {
            //     temp += i + ": \n";
            // }
            // console.log(temp);

            let i = 1;
            for (let track of response.data.items) {
                console.log(i++ + ": " + track.name);
            }

            setTemp({
                temp: 'lasx'
            });

            

            // console.log(response)

            setData(response.data)
        }).catch((error) => {
            console.log(error)
        });
    };

    return (
        <div>
            <button onClick={handleGetData}>Get Data</button>
            <br/>
            {/* <p>{temp}</p> */}
            {
                data?.items ? data.items.map((item) => <p className="list">{index++}: {item.name} </p>) : null
            }
        </div>
    );
};

export default ButtonGetTop;