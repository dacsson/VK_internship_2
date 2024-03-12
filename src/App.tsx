import './App.css';
import { GroupList } from './components/GroupList';
import { useState } from 'react';

function App() {
  const [groups, setGroups] = useState<Group[]>();

  return (
    <div className="App">
      <div className='content'>
        <GroupList groups={groups} setGroups={setGroups}/>
      </div>
    </div>
  );
}

export default App;
