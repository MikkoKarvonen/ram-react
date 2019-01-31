import React, { Component } from 'react';
import Header from './components/Header.js';
import './App.css';

/*let Parser = require('rss-parser');
let parser = new Parser();
(async () => {
  let feed = await parser.parseURL("https://cors-anywhere.herokuapp.com/"+'http://feeds.soundcloud.com/users/soundcloud:users:152277214/sounds.rss');
  feed.items.forEach(item => {
    console.log(item)
  });
  console.log(feed);
 
})();*/

import values from './tempData/data.json'
console.log(values)
values.items.forEach(item => {
  console.log(item)
});

class App extends Component {
  render() {
    return (
      <div>
        <Header title={values.title}/>
        <div className="App episodes">
          {values.items.map(function(item, i){
            return (
              <div key={i} className="episode">
                <img src={item.itunes.image} className="coverImage"/>
                <h2>{item.title}</h2>
                <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+item.guid.split('tracks/')[1]+"&color=%23ff5500&inverse=true&auto_play=false&show_user=true"}></iframe>
                <p>{item.content}</p>
                <p>{item.pubDate}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
