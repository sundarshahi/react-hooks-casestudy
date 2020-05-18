import React, {useState} from 'react';

// import StopWatch from './stopwatch/StopWatch'
import FadeIn from './utils/FadeIn';
import { Level0, Level1, Level2, Level3, Level4, Level5,Level6, Level7, Level8, Level9, Level10, Level11, Level12 } from './levels'

function App() {
  const [selectedIndex,setSelectedIndex] = useState(0);
  const levels = [ Level0, Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9, Level10, Level11, Level12 ];
  const SelectedComponent = levels[selectedIndex];
  return (
    <>
    <h1>React Hooks: Interval</h1>
    <label>Level:</label>
    <select
    style={{ marginBottom: 10 }}
    value={selectedIndex || '' }
    onChange={e=> setSelectedIndex(e.target.value)}
    >
      {levels.map((_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
      ))}

    </select>
    <FadeIn delay={250} duration={450}>
     <SelectedComponent/>
    </FadeIn>
    
    </>
  
  );
}

export default App;
