import React, { useState } from 'react';
import { isReturnStatement, TypePredicateKind } from 'typescript';

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange:()=> void
  items:string[]
}


export function Accordion(props: AccordionPropsType) {
 
  return <div>
    <AccordionTitle title={props.titleValue}
    onChange={props.onChange}    />
        
    {!props.collapsed && <AccordionBody items={props.items}/>}
  </div>
}


type AccordionTitlePropsType = {
  title: string
  onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={(e)=> props.onChange()}>{props.title}</h3>
    );
}
type AccordionBodyPropsType = {
   items:string[]
}

function AccordionBody(props:AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((i, index)=><li key={index}>{i}</li>)}
    </ul>

  );
}

