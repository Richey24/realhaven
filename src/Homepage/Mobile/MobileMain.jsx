import Eight from './Eight'
import Fifth from './Fifth'
import Footer from './Footer'
import Fourth from './Fourth'
import Header from './Header'
import Ninth from './Ninth'
import Second from './Second'
import Seventh from './Seventh'
import Sixth from './Sixth'
import Third from './Third'
import { useState } from 'react';
import Result from './Result'

const MobileMain = ({ properties, recommend }) => {
  const [result, setResult] = useState(false)
  const [house, setHouse] = useState([])
  return (
    <div>
      <Header properties={properties} setHouse={setHouse} setResult={setResult} />
      {
        result ?
          (<Result result={house} />)
          :
          (
            <>
              <Second />
              <Third properties={properties} />
              <Fourth properties={recommend} />
            </>
          )
      }
      <Fifth />
      <Sixth />
      <Seventh />
      <Eight />
      <Ninth />
      <Footer />
    </div>
  )
}

export default MobileMain