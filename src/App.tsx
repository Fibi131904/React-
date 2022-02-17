import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './Accordion';
import { Rating } from './Rating';
import OnOff from './OnOff';
import UncontrolledAccordion  from './UncontrolledAccordion';
import { AncontrolledRating } from './UncontrolledRating';


function App() {
  return (
    <div>

      <OnOff />
      <UncontrolledAccordion titleValue={'Menu'}/>
      <AncontrolledRating />

      <Rating value={3} />
      <Accordion titleValue={'Menu'} collapsed={false}/>
      {/* <PageTitle title={'This is App component'} />
      <PageTitle title={'Frends'} />
      Article 1
      <Rating value={3}/>
      
      Article 2 
      <Rating value={0}/>
      <Rating value={1}/>
      
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/> */}
          </div>
  );
}
type PageTitlePropsType ={
 title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}




export default App;
