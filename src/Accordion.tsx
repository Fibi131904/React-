import { type } from 'os';
import React, { useState } from 'react';
import { isReturnStatement, TypePredicateKind } from 'typescript';

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange:(collapsed:boolean)=> void
}


export function Accordion(props: AccordionPropsType) {
 
  return <div>
    <AccordionTitle title={props.titleValue} onChange={function (): void {
      throw new Error('Function not implemented.');
    } }    />
        
    {!props.collapsed && <AccordionBody/>}
  </div>
}


type AccordionTitlePropsType = {
  title: string
  onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={()=>{props.onChange}}>{props.title}</h3>
    );
}


function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>

  );
}

