import React from 'react'
import { useState, useEffect } from 'react';

export default function Servers(){       
    let [data, setData] = useState({
        "name": "loading...",
        "connect": "",
        "map": "",
        "playercount": ""
    });
    useEffect( () => {
        fetch("http://localhost:3001/ServerSts").then(res => res.json()).then(dt => setData({
            "name": dt.name,
            "connect": "steam://connect/"+dt.connect,
            "map": dt.map,
            "playercount": dt.raw.numplayers
        }))
    }
    )
    return(
        <>
            <div className="Servers">
                <h1>Server List</h1>
                <div className="ServerList">
                    <h2 title="Connect"><a href={data.connect}>{data.name}</a></h2><h1 title="Map">{data.map}</h1><h1 title="Player amount">{data.playercount}</h1>
                </div>
            </div>
        </>
    )

}
