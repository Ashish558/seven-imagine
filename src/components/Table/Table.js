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
}) {
    const [tableData, setTableData] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const temp = tableData.slice(0, maxPageSize);
        setTableData(temp);
        setCurrentPage(1);
    }, []);

    //change tabledata if current page changes
    useEffect(() => {
        const temp = data.slice(
            (currentPage - 1) * maxPageSize,
            (currentPage - 1) * maxPageSize + maxPageSize
        );
        setTableData(temp);
    }, [currentPage, data, maxPageSize]);

    // console.log(tableData);

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
            <Pagination
                totalPages={Math.ceil(data.length / maxPageSize)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}
