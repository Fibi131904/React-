import React, { useState, KeyboardEvent } from 'react';
import { isTemplateSpan } from 'typescript';
import s from './Select.module.css'
import { useEffect } from 'react';

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoverElementValue] = useState(props.value)


    const selectItems = props.items.find(i => i.value === props.value)
    const hoveredItems = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoverElementValue(props.value)
    }, [props.value])

    const togolItems = () => setActive(!active)
    const onItemsClick = (value: any) => {
        props.onChange(value)
        togolItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < isTemplateSpan.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElemend = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElemend) {
                        props.onChange(pretendentElemend.value)
                        return
                    }
                }
            }
            if (!selectItems) {

                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }



    return (
        <>
            {/* <select>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
                <option value="">Riga</option>
            </select> */}
            <div className={s.select} onKeyPress={() => { }}>
                <span className={s.main} onClick={togolItems}>{selectItems && selectItems.title}</span>
                {
                    active &&
                    <div className={s.items}
                        tabIndex={0}
                        onKeyUp={onKeyUp}>
                        {props.items.map(i => <div
                            onMouseEnter={() => { setHoverElementValue(i.value) }}
                            className={s.item + '' + (hoveredItems === i ? s.selected : '')}
                            key={i.value}
                            onClick={() => { onItemsClick(i.value) }
                            }
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    );
}