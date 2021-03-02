import React from 'react'
import { BrowserRouter, Link, Route, Switch, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

let LJ = () =>{
    let [LJData, setLJData] = useState({  "":"" // dont forget to edit this 
    });
    useEffect( () => {
        fetch("http://localhost:3001/ljtop").then(res => res.json()).then(dt => setLJData({ dt // and this
        }))
    }
    )
}

let Bhop = () =>{
    let [BhopData, setBhopData] = useState({  "":"" // dont forget to edit this
    });
    useEffect( () => {
        fetch("http://localhost:3001/bhoptop").then(res => res.json()).then(dt => setBhopData({ dt // and this
        }))
    }
    )
}

let BlockLJ = () =>{
    let [BLJData, setBLJData] = useState({  "":"" // dont forget to edit this
    });
    useEffect( () => {
        fetch("http://localhost:3001/ljblocktop").then(res => res.json()).then(dt => setBLJData({ dt // and this
        }))
    }
    )
}

let DropBhop = () =>{
    let [DBhopData, setDBhopData] = useState({  "":"" // dont forget to edit this
    });
    useEffect( () => {
        fetch("http://localhost:3001/dropbhoptop").then(res => res.json()).then(dt => setDBhopData({ dt // and this
        }))
    }
    )
}

let MBhop = () =>{
    let [MBhopData, setMBhopData] = useState({ "":"" // dont forget to edit this
    });
    useEffect( () => {
        fetch("http://localhost:3001/multibhoptop").then(res => res.json()).then(dt => setMBhopData({ dt // and this
        }))
    }
    )
}

let WJ = () =>{
    let [WJData, setWJData] = useState({  "":"" // dont forget to edit this
    });
    useEffect( () => {
        fetch("http://localhost:3001/wjtop").then(res => res.json()).then(dt => setWJData({ dt // and this
        }))
    }
    )
}

export default function Home(){
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
            <Route exact path="/Leaderboard/lj"><LJ /></Route>
            <Route path="/Leaderboard/bhop"><Bhop /></Route>
            <Route path="/Leaderboard/blocklj"><BlockLJ /></Route>
            <Route path="/Leaderboard/mbhop"><MBhop /></Route>
            <Route path="/Leaderboard/dbhop"><DropBhop /></Route>
            <Route path="/Leaderboard/wj"><WJ /></Route>
        </>
    )

}
