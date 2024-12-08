import React from 'react'; 
import { RecoilRoot, useRecoilValue } from 'recoil'; // Import RecoilRoot and useRecoilValue hook from Recoil for state management
import './App.css'; // Import CSS for styling
import { todosAtomFamily } from './atoms'; // Import atomFamily for managing todo states

// App component that wraps the entire app in RecoilRoot for state management
function App(){
  return(
    <RecoilRoot> {/* RecoilRoot provides context for Recoil state */}
      <div>
        {/* Rendering multiple Todo components with different IDs */}
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={3} /> {/* Testing fallback case, e.g., if no data is found */}
      </div>
    </RecoilRoot>
  )
}

// Todo component that displays the data for a specific todo based on the provided 'id'
function Todo({id}){
  // useRecoilValue hook retrieves the current value of the todo atomFamily for the given 'id'
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return(
    <div>
      {/* Render todo title and description from the fetched todo data */}
      {currentTodo.title}
      {currentTodo.description}
    </div>
  )
}

// Export App component as the default export
export default App;
