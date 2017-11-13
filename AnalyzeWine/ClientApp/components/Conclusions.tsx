import * as React from 'react';
import  {Component} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface BotProps  {
    barrel:{
        aging: string;
        wood: string;
        toast: string;
    }
    age:{
        min: number;
        max: number;
    }
}

interface BotState {
    barrel:{
        aging: string;
        wood: string;
        toast: string;
    }
    age:{
        min: number;
        max: number;
    }
}

class BotConclusions extends Component <BotProps , BotState>{
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            barrel: {
                wood: props.barrel.wood,
                toast: props.barrel.toast,
                aging: props.barrel.aging
            },
            age: {
                min: props.age.min,
                max: props.age.max,
            }
        };
    }

    render() {
        const {wood, toast, aging} = this.props.barrel;
        const {min, max} = this.props.age;
        return (
            <div>
                <h3>Summary</h3>
                <p>Som-Bot can give suggested conclusions based on your tasting notes:</p>

                <p>Age: {min} to {max}</p>
                <p>Barrel Aging: {aging}</p>
                <p>Wood: {wood}</p>
                <p>Toast: {toast}</p>

                <p>Climate? {}</p>
                <p>Balance (alcohol, acid, tannin, sugar)? {}</p>
                <p>Origin List {}</p>
                <p>Style? {}</p>
                <p>Varietal List {}</p>
                <p>Quality/Rating {}</p>
            </div>
        )
    }
}

export default BotConclusions;