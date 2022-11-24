import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { TableHeader } from "./TableHeader";
import TableItem from "./tableItem";

export default function Table({
   dataFor,
   data,
   tableHeaders,
   maxPageSize,
   onClick,
   hidePagination
}) {
   const [tableData, setTableData] = useState(data);
   const [currentPage, setCurrentPage] = useState(1);
   
   useEffect(() => {
      if (hidePagination === true) {
         setTableData(data)
      } else {
         const temp = tableData.slice(0, maxPageSize);
         setTableData(temp);
         setCurrentPage(1);
      }
   }, []);


   //change tabledata if current page changes
   useEffect(() => {
      if (hidePagination === true) return
      const temp = data.slice((currentPage - 1) * maxPageSize, (currentPage - 1) * maxPageSize + maxPageSize)
      setTableData(temp)
   }, [currentPage, data])

   return (
      <div>
         <table className="table-auto mb-3 text-center w-full">
            <thead className="pb-2">
               <tr>
                  {tableHeaders.map((item, idx) => {
                     return <TableHeader key={idx} header={item} />;
                  })}
               </tr>
            </thead>
            <tbody>
               {tableData.map((item, idx) => {
                  return (
                     <TableItem
                        dataFor={dataFor}
                        item={item}
                        key={idx}
                        onClick={onClick}
                     />
                  );
               })}
            </tbody>
         </table>

         {!hidePagination && <Pagination
            totalPages={Math.ceil(data.length / maxPageSize)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
         />}

      </div>
   );
}
