import React, { useState } from 'react';
import './App.css';
import { Accordion } from './Accordion';
import { Rating, RatingValueType } from './Rating';
import { OnOff } from './OnOff';
import UncontrolledAccordion from './UncontrolledAccordion';
import { AncontrolledRating } from './UncontrolledRating';
import UncontrolledOnOff from './UncontrolledOnOff';
import { Select } from './Select/Select';
import { Clock } from './stories/Clock/Clock';
import { KeysTrackerExample, ResetEffectExample, SetIntervalExample, SetTimeoutExample } from './stories/UseEffect.stories';


function App(props: any) {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [swithOn, setSwithOn] = useState<boolean>(false)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  return (
    <div>
       <SetTimeoutExample/>
      <SetIntervalExample/>
      <KeysTrackerExample/>
      <ResetEffectExample/>
      <Clock/>
      <Rating value={ratingValue}
        onClick={setRatingValue} />
      <AncontrolledRating />
      <Accordion titleValue={'Menu'}
      collapsed={accordionCollapsed} onChange={() => { setAccordionCollapsed(!accordionCollapsed); } } items={[]} onClick={Accordion} />

      {/* <OnOff on={swithOn} onChange={(on) => setSwithOn(on)} /> */}
<UncontrolledOnOff onChange={setSwithOn}/>{swithOn.toString()}
  <Select value={undefined} onChange={Select} items={[]}/>   
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
