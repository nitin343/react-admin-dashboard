import { GridComponent } from '@syncfusion/ej2-react-grids'
import { ColumnDirective, ColumnsDirective, ContextMenu, Edit, ExcelExport, Filter, Inject, Page, PdfExport, Resize } from '@syncfusion/ej2-react-grids/src'
import  Header  from '../component/Header'
import React from 'react'
import { contextMenuItems, ordersData, ordersGrid } from '../data/dummy'
import { Sort } from '@syncfusion/ej2/grids'
import { pdfexport } from '@syncfusion/ej2'
import { pdfExport } from '@syncfusion/ej2/pivotview'




const Orders = () => {
  return (
    <div className='mt-20 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
         <Header category="page" title="orders" />
         <GridComponent 
          id='gridcomp'
          dataSource={ordersData}
          allowPaging
          allowSorting
          allowResizing
          allowPdfExport
          allowFiltering
         >
          <ColumnsDirective>
           {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
           ))}
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Edit, PdfExport, Filter, ExcelExport, Edit, Page]} />
         </GridComponent>
    </div>
  )
}

export default Orders