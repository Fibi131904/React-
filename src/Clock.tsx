import React, { useEffect, useState } from 'react';

type PropsType = {

}
const get2digitalsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {

        const intervalID= setInterval(() => {
            console.log('tick');
            
            setDate(new Date())
        }, 1000)
        return()=>{
            clearInterval(intervalID)
        }
    }, [])
   



    return <div>
        <span>{get2digitalsString(date.getSeconds())}</span>
        :
        <span>{get2digitalsString(date.getMinutes())}</span>
        :
        <span>{get2digitalsString(date.getHours())}</span>
    </div>
}