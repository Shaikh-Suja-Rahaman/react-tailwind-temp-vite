import { useState } from 'react';
import './App.css'
function App() {

  const [userRating, setUserRating] = useState(0);
  return (
    <div className='flex gap-2 m-4'>
      {Array(5).fill(0).map((elem, ind) => (<Star key={ind} onClick={setUserRating} starNumber={ind} isActive={userRating >= ind} />))}
    </div>

  )
}
export default App


function Star({ isActive, onClick, starNumber }) {
  return (
    <button onClick={e => onClick(starNumber)} className={`w-10 h-10 rounded-full ${!isActive ? 'bg-neutral-200' : 'bg-amber-300 text-amber-800'}`}>
    sta
    </button>
  )
}