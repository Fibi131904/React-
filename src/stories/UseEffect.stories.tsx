import { useEffect, useState } from "react";


export const SetIntervalExample = ()=>{
    const[counter,setCounter]=useState(1)  

    console.log('SetIntervalExample');

useEffect(()=>{
    const intervalId = setInterval(()=>{
        setCounter(state=>state+1)
    },1000)

    return ()=>{
clearInterval(intervalId)
    }
},[])

return <> 
Hello, counter:{counter}
</>
}






export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered with'+ counter);
    useEffect(() => {
        console.log('Effect occurred:' + counter);
        return () => {
            console.log('Reset Effect:' + counter);
        }
    }, [counter])

    const increase = () => { setCounter(counter + 1) }
    return <div>
        Hello, counter:{counter}<button onClick={increase}>+</button>;</div>


}
export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler) //зачистка
        }
    }, [text])

   
    return <div>
      Typed text:{text}</div>


}
export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    useEffect(() => {
       const TimeoutId= setTimeout(()=>{
        console.log('Timeout Expired');
         setText('3 seconds passed')
       },3000)
        return () => {
          clearTimeout(TimeoutId) //зачистка
        }
    }, [text])

   
    return <div>
      Text:{text}</div>


}