import React, {useState, useEffect} from 'react'





 const styles = {
  fontSize: '30px'
 }

export default function Clock(props:any){
  const [dateNow, setDate] = useState(getTime())

  useEffect( () => {
    const intervalId= setInterval(()=>{
      setDate(getTime())
    },1000)
    return ()=>{
clearInterval(intervalId)
}
  }, [])

  function getTime(){
    let date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return {hours, minutes, seconds}
  }

  return(
    <div className="progress-bar">
        <p style={styles}>{dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}</p>
    </div>
  )
}

