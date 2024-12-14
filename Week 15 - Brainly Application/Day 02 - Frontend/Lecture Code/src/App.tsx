import './App.css'
import { Button } from './component/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
 
  return (
    <>
      <Button startIcon={<PlusIcon size='md'/>} variant="primary" text="Share" size="md"/>
      <Button variant="secondary" text="Add Content" size="md"/>
    </>
  )
}

export default App
