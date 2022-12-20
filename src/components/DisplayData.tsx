import React, { useState, useEffect } from 'react'
import DataVis from './DataVis'

function DisplayData(props: any) {

  return (
    <div className='m-auto transition-colors duration-1000 bg-dataColor dark:bg-stone-400 shadow-[10px_10px_0px_0px_rgba(33,33,33)] text-white rounded-xl h-fit w-fit p-10'>
      <p className='text-4xl mb-5'>
        Past Earnings Results: {props.dataEPS ? props.tickerData.ticker + ", " + props.tickerData.name : ''}
      </p>
      <DataVis dataEPS={props.dataEPS} />
    </div>
  )
}

export default DisplayData