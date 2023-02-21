import React from 'react'
import { Category, ChartComponent, Inject, Legend, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries } from '@syncfusion/ej2-react-charts'
import { Tooltip } from '@syncfusion/ej2-react-popups'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'


const Stacked = ({width, height}) => {

 const {currentMode} = useStateContext();

  return (
    <ChartComponent
    width={width}
    height={height}
    id= "charts"
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{border: {width: 0}}}
    tooltip={{enable: true}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    legendSettings={{background: 'white'}}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item , index)  =>  <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked