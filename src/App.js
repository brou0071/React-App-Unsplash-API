import Unsplash from 'unsplash-js';

import React,{useState} from 'react';
import './App.css';

// TODO: Replace "APP_ACCESS_KEY" with your own key, which
// can be generated here: https://unsplash.com/developers
const unsplash = new Unsplash({ accessKey: '5_8a6_v2hZEEjkn-It2kGO7IVk7GtMAvkpRIu2JZRSE' });

function App() {
  const [sportresults,setSportResults] = useState([]);

  const fetchSport = (value)=>{
    const btnValue = value;

    fetch("https://api.unsplash.com/search/photos?client_id=5_8a6_v2hZEEjkn-It2kGO7IVk7GtMAvkpRIu2JZRSE&query="+btnValue+"&orientation=landscape&per_page=30&order_by=relevant")
    .then(res=>res.json())
    .then(data=>{
      setSportResults(data.results)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Click below to generate free great Sport Wallpapers!</p>

        <div className="search-btn-wrapper">
          <button className="search-btn" value="nba" onClick={(e)=>fetchSport(e.target.value)}>NBA</button>
          <button className="search-btn" value="mlb" onClick={(e)=>fetchSport(e.target.value)}>MLB</button>
          <button className="search-btn" value="nfl" onClick={(e)=>fetchSport(e.target.value)}>NFL</button>
          <button className="search-btn" value="pga" onClick={(e)=>fetchSport(e.target.value)}>PGA</button>
          <button className="search-btn" value="soccer" onClick={(e)=>fetchSport(e.target.value)}>SOCCER</button>
          <button className="search-btn" value="nhl" onClick={(e)=>fetchSport(e.target.value)}>NHL</button>
          <button className="search-btn" value="nascar" onClick={(e)=>fetchSport(e.target.value)}>NASCAR</button>
          <button className="search-btn" value="mma" onClick={(e)=>fetchSport(e.target.value)}>MMA</button>
          <button className="search-btn" value="esports" onClick={(e)=>fetchSport(e.target.value)}>ESPORTS</button>
        </div>
      </header>

      <div className="gallery">

        {sportresults.map((item)=>{  
          return (
            <div className="item-wrapper">
              <a className="item-link" href={item.urls.full} target="_blank" rel="noreferrer">
                <img className="item" key={item.id} src={item.urls.regular} alt={item.alt_description} />
              </a>
  
              <img className="img-profile" key={item.user.id} height="32" width="32" src={item.user.profile_image.small} />
              <span className="profile_username">by <h2>{item.user.username}</h2></span><br/>
              
              <strong>Download: </strong>
              <a className="link" href={item.urls.small} target="_blank" rel="noreferrer">Small</a>
              <a className="link" href={item.urls.regular} target="_blank" rel="noreferrer">Medium</a>
              <a className="link" href={item.urls.full} target="_blank" rel="noreferrer">Large</a><br/>
              <strong>Resolution: </strong>{item.width}px x {item.height}px
            </div>
            )
        })}

      </div>

    </div>
  );
}

export default App;
