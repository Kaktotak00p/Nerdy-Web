import React from 'react'
import { BrowserRouter, Link, Route, Switch, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GetLJ = async () => { 
    var response = await fetch("http://localhost:3001/ljtop")
    return await response.json()
}
    
const Getbhop = async () => { 
    var response = await fetch("http://localhost:3001/bhoptop")
    return await response.json()
} 

const GetDbop = async () => { 
    var response = await fetch("http://localhost:3001/dropbhoptop")
    return await response.json()
}

const GetLJB = async () => { 
    var response = await fetch("http://localhost:3001/ljblocktop")
    return await response.json()
}

const GetMbhop = async () => { 
    var response = await fetch("http://localhost:3001/multibhoptop")
    return await response.json()
}

const GetWJ = async () => { 
    var response = await fetch(" http://localhost:3001/wjtop")
    return await response.json()
}


console.log(GetLJ());
console.log(GetLJB());
console.log(Getbhop());
console.log(GetMbhop());
console.log(GetDbop());
console.log(GetWJ());



export default function Home(){       
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
            <div className = "Wraper">
                <Link to="/Leaderboard/lj" className="navel" title="Home page"><h1>Lj</h1></Link>   
                <Link to="/Leaderboard/bhop" className="navel" title="Servers"><h1>Bhop</h1></Link>
                <Link to="/Leaderboard/blocklj" className="navel" title="Demos"><h1>BlockLj</h1></Link>
                <Link to="/Leaderboard/wj" className="navel" title="Demos"><h1>Wj</h1></Link>
                <Link to="/Leaderboard/mbhop" className="navel" title="Demos"><h1>MBhop</h1></Link>
                <Link to="/Leaderboard/dbhop" className="navel" title="Demos"><h1>DBhop</h1></Link>
            </div>
            <Route exact path="/Leaderboard/lj"></Route>
            <Route path="/Leaderboard/bhop"></Route>
            <Route path="/Leaderboard/blocklj"></Route>
            <Route path="/Leaderboard/mbhop"></Route>
            <Route path="/Leaderboard/dbhop"></Route>
            <Route path="/Leaderboard/wj"></Route>
        </>
    )

}
