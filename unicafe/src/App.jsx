import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad == 0) {
    return (
      <div>
      <h1>statistics</h1>
      <div>no feedback given</div>
    </div>
    )
  } else {
    return ( 
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text={"good"} value={good} />
            <StatisticsLine text={"neutral"} value={neutral} />
            <StatisticsLine text={"bad"} value={bad} />
            <StatisticsLine text={"all"} value={good + bad + neutral} />
            <StatisticsLine text={"average"} value={(good-bad)/(good + bad + neutral)} />
            <StatisticsLine text={"positive"} value={good/(good + bad + neutral)*100 + " %"} />
          </tbody> 
        </table>
      </div>
    )
  }
}

const Button = ({onClick, value}) => {
  return (
    <button onClick={onClick}>{value}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (    
    <tr>
      <td>{text}</td>
      <td>{value}</td>  
    </tr> 
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} value={"good"} />---
      <Button onClick={() => setNeutral(neutral + 1)} value="neutral"/>---
      <Button onClick={() => setBad(bad + 1)} value="bad"/>
      
      <Statistics good={good} bad={bad} neutral={neutral} />     
    </div>

  )
}

export default App