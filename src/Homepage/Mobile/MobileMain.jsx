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

const MobileMain = () => {
  const [result, setResult] = useState(false)
  return (
    <div>
      <Header setResult={setResult} />
      {
        result ?
          (<Result />)
          :
          (
            <>
              <Second />
              <Third />
              <Fourth />
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