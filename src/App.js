import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling if needed
import Square from './Square';

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
  <>
   <div className="like-dislike">
      <button className="like-btn" onClick={handleLike}>Like ({likes})</button>
      <button className="dislike-btn" onClick={handleDislike}>Dislike ({dislikes})</button>
    </div>
    <Square/>

  </>
   
  );
}

export default App;
