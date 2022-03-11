import React, { useState } from 'react';
import {action} from '@storybook/addon-actions'
import { Accordion } from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback= action('acordion mode chahge event fired');


export const CollapsedMode = () => <Accordion titleValue={'Meny'} collapsed={true} onChange= {callback} />;
export const UnCollapsedMode =() => <Accordion titleValue={'Users'} collapsed={false} onChange= {callback} />;

export const ModeChanging =()=> {
    const [value,setvalue]=useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed= {value} onChange={()=> setvalue(!value)}/>
};

