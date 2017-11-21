import * as React from 'react';
import  {Component} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Age from './somBot/Age'
import BulkAging from './somBot/BulkAging'
import Chemical from './somBot/Chemical'
import Malolactic from './somBot/Malolactic'
import  Place from './SomBot/Place'
import  Grape from './SomBot/Grape'

class BotConclusions extends Component{


    render() {

        return (
            <div>
                <h3>Summary</h3>
                <p>Som-Bot can give suggested conclusions based on your tasting notes:</p>

             <Grape/>





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