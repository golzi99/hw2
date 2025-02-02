import React from 'react'
import d from './img/downIcon.svg'
import u from './img/upIcon.svg'
import ns from './img/noSortIcon.svg'

// добавить в проект иконки и импортировать
const downIcon = d
const upIcon = u
const noneIcon = ns

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') {
        return down
    } else if (sort === down) {
        return up
    } else if (sort === up)
        return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{
                marginLeft: '5px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
