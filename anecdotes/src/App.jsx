// changer ce qui apparait sous "Anecdotes with most votes" lorsqu'il n'y a pas de vote.
// séparer l'anecdote de "has ... votes"

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] +=1
    setVotes(newVotes)
  }

  const handleNextClick = () => {
    const next = Math.floor(8*Math.random())
    setSelected(next)
  }
  console.log(votes);

  const findIndexOfMax = (array) => {
    let index = 0
    let max = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        index = i
        max = array[i]
      }
    }
    return index  
  }
  

  const index = findIndexOfMax(votes)


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <article>{anecdotes[selected]}</article> 
      <div>
        <div>has {votes[selected]} votes</div>
        <button onClick={handleNextClick}>next anecdote</button>---
        <button onClick={handleVoteClick}>vote</button>
      </div> 
      <h1>Anecdote with most votes</h1>
      {anecdotes[index]}
      <div>has {votes[index]} votes</div>


    </div>
  )
}

export default App
