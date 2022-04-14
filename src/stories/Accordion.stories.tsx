import React, { useState } from 'react';
import {action} from '@storybook/addon-actions'
import { Accordion } from '../Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback= action('acordion mode chahge event fired');


export const MenuCollapsedMode = () => <Accordion titleValue={'Meny'} collapsed={true} onChange= {callback} items={[]}/>;
export const UserUnCollapsedMode =() => <Accordion titleValue={'Users'} collapsed={false} onChange= {callback} items={['Dimich','Valera', 'Artem','Viktor']}/>;

export const ModeChanging =()=> {
    const [value,setvalue]=useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed= {value} onChange={()=> setvalue(!value)} items={['Dimich','Valera', 'Artem','Viktor']}/>
};

