import './App.css';
import React from 'react';
import Counter from './features/counter/Counter';
import User from './features/user/User';
import Post from './features/post/Post';

function App() {
  return (
    <div className="App">
        <Counter></Counter>
        <User></User>
        <Post></Post>
    </div>
  );
}

export default App;
