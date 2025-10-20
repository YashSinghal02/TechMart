import React from 'react'
import SalesCard1 from './SalesCard1'

function SalesHeading() {
  return (
    <div>
      <div className="grab-deal">
  <h2>
    Grab the best deal on <span className="grab-blue">Smartphones</span>
  </h2>
  <div className="grab-line">
    <span className="inner-grab-line"></span>
  </div>
</div>

<SalesCard1/>
    </div>
  )
}

export default SalesHeading
