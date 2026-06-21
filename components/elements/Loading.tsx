import { LineSpinner } from 'ldrs/react'
// @ts-ignore
import 'ldrs/react/LineSpinner.css'

export default function Loading() {
    return (
        <div className='spinner_container'>
            <LineSpinner
                size="40"
                stroke="3"
                speed="1"
                color="#308041"
            />
        </div>
    )
}


export function LoadingMini() {
    return (
        <LineSpinner
            size="15"
            stroke="1.5"
            speed="1"
            color="#308041"
        />
    )
}
