import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Button } from './Button';


export default {
  title: 'input',
  // component: input,
}
export const UncontrolledInput = () => <input />



export const TracValueControlledInput = () => {
  const [value, setValue] = useState('')
  return <><input onChange={(event) => {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }} />- {value}</>
}
export const GetValueControlledInput = () => {
  const [value, setValue] = useState('')
  const inputRef= useRef(null) // 1) создали ссылку при помощи хука Ref

  const save = () => {
    const el= inputRef.current as unknown as HTMLInputElement //3 )в callback save мы обращаемся  к этой ссылке и взять значение
    // и сохранить в локальный стейт
     setValue(el.value)
     }
     //2)  привязали ссылку к input, к которому хотим ссылаться и получать от него информацию
  return <><input ref={inputRef} /> <button onClick={save} >Save </button> Actual value : {value} </>
}


export const ControlledInput = () => <input />
 