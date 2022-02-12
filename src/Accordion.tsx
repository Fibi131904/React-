import { type } from 'os';
import React from 'react';
import { isReturnStatement, TypePredicateKind } from 'typescript';

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  
      
      return <div>
        <AccordionTitle title={props.titleValue} />
        {!props.collapsed=== false && <AccordionBody />}
      </div>
  
    }


export function Accordion2(props: AccordionPropsType) {

  if (props.collapsed===true) {
    return <div>
      <AccordionTitle title={props.titleValue} />
    </div>
  } else {
    
    return <div>
      <AccordionTitle title={props.titleValue} />
      <AccordionBody />
    </div>

  }
}





type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

  return (
    <h3>{props.title}</h3>);
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

