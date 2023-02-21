import { GridComponent } from '@syncfusion/ej2-react-grids'
import { ColumnDirective, ColumnsDirective, ContextMenu, Edit, Filter, Inject, Page, Search , Resize } from '@syncfusion/ej2-react-grids/src'
import  Header  from '../component/Header'
import React from 'react'
import { contextMenuItems, employeesData, employeesGrid } from '../data/dummy'
import { Sort } from '@syncfusion/ej2/grids'
import { Toolbar } from '@syncfusion/ej2-react-richtexteditor'


const Employees = () => {
  return (
    <div className='mt-20 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
         <Header category="page" title="Employees" />
         <GridComponent 
          dataSource={employeesData}
          allowPaging
          allowSorting
          toolbar={['Search']}
          width="auto"
         
         >
          <ColumnsDirective>
           {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
           ))}
          </ColumnsDirective>
          <Inject services={[Search, Page, Toolbar]} />
         </GridComponent>
    </div>
  )
}

export default Employees