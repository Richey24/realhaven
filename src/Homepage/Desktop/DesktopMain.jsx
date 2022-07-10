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

const DesktopMain = () => {
    const [search, setSearch] = useState(false)
    return (
        <div>
            <Header setSearch={setSearch} />
            {
                search ?
                    (
                        <Result />
                    ) :
                    (
                        <>
                            <Second />
                            <Third />
                            <Fourth />
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