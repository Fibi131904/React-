import React, { useState } from 'react';
import './App.css';
import { Accordion } from './Accordion';
import { Rating, RatingValueType } from './Rating';
import { OnOff } from './OnOff';
import UncontrolledAccordion from './UncontrolledAccordion';
import { AncontrolledRating } from './UncontrolledRating';


function App(props: any) {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [swithOn, setSwithOn] = useState<boolean>(false)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  return (
    <div>

      <OnOff on={swithOn} onChange={(on) => setSwithOn(on)} />

      <UncontrolledAccordion titleValue={'Menu'} />
      <AncontrolledRating />

      <Rating value={ratingValue}
        onClick={setRatingValue} />
      <Accordion titleValue={'Menu'}
        collapsed={accordionCollapsed}
        onChange={setAccordionCollapsed(!accordionCollapsed)} />
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
type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}




export default App;
