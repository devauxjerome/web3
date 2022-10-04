import Button from "components/Button/Button"
import Display from "components/Display/Display"
import { useState } from "react"


const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const changeCount = (delta) => {
      var counter_updated = counter + parseInt(delta)
      setCounter(counter_updated)
      localStorage.setItem("counter", JSON.stringify(counter_updated))
      
    }
    
  
    return (
      <div>
        <Display counter={counter}/>
        <Button
          delta="5"
          changeCount={changeCount}
          text='plus'
        />
        <Button
          delta={-counter}
          changeCount={changeCount}
          text='zero'
        />     
        <Button
          delta="-5"
          changeCount={changeCount}
          text='minus'
        />           
      </div>
    )
}

export default App