import Second from '../Mobile/Second'
import Header from './Header'
import Third from '../Mobile/Third';
import Fourth from '../Mobile/Fourth';
import Fifth from '../Mobile/Fifth';
import Eight from './../Mobile/Eight';
import Footer from './../Mobile/Footer';
import Sixth from './Sixth';
import Seventh from './Seventh';
import Ninth from './Ninth';
import { useState } from 'react';
import Result from './Result';

const DesktopMain = ({ properties }) => {
    const [search, setSearch] = useState(false)
    const [result, setResult] = useState([])
    return (
        <div>
            <Header setResult={setResult} setSearch={setSearch} />
            {
                search ?
                    (
                        <Result result={result} />
                    ) :
                    (
                        <>
                            <Second />
                            <Third properties={properties} />
                            <Fourth properties={properties} />
                        </>
                    )
            }
            <Fifth />
            <Eight />
            <Sixth />
            <Seventh />
            <Ninth />
            <Footer />
        </div>
    )
}

export default DesktopMain