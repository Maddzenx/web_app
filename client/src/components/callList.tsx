import React from 'react';
import { IState as Props } from "../App";

interface IProps {
    callList: Props["callList"]
}

const callList: React.FC<IProps> = ({callList}) => {

    const rendercallList = (): JSX.Element[] => {
        return callList.map(callList => {
            return (
                <h2>{callList.title}</h2>

            )
        })
    }

    return (
        <ul>
            {rendercallList()} 
        </ul>
    )
}

export default callList
