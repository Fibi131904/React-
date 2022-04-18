import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { Accordion } from '../Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('acordion mode chahge event fired');
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Meny'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback} />;
export const UserUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onClick={onClickCallback} onChange={callback} items={[{ title: 'Dimich', value: 1 }, { title: 'Valera', value: 2 },
{ title: 'Artem', value: 3 }, { title: 'Viktor', value: 4 }]} />;

export const ModeChanging = () => {
    const [value, setvalue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed={value} onClick={(id)=>{alert('user with ID ${id)shoud be heppy')}} onChange={() => setvalue(!value)}
     items={[{ title: 'Dimich', value: 1 },
      { title: 'Valera', value: 2 },
    { title: 'Artem', value: 3 },
     { title: 'Viktor', value: 4 }]} />
};

