const StatisticLine = (props) =>{
  return (
      
        <tr>
          <td>{props.text} :</td> 
          <td>{props.value}</td>
        </tr>
        
  )
}

const Statistics = (props) => {
    var total = props.good + props.bad + props.neutral;
    var m = props.good - props.bad;
    var mean = m / total;
    if (total === 0){
      return (
        <div>
          <h1>Statistics</h1>
          <p>No feedback given</p>
          </div>
      )
    }
    return (
      <div>
        <h1>Statistics</h1>
        <table>
        <tbody>
            <StatisticLine text="Good" value = {props.good}/>
            <StatisticLine text ="Neutral" value= {props.neutral}/>
            <StatisticLine text ="Bad" value= {props.bad}/>
            <StatisticLine text ="Average" value= {mean}/>
            <StatisticLine text ="Positive" value= {props.good / total * 100  + " %"}/>
            </tbody>
        </table>
        </div>
    )
}

export default Statistics