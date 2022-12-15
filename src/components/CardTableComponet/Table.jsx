import { TableHead } from "./TableHead";
import { Data } from "./Data";
import DataTable from "react-data-table-component";
import {TableTop} from './TableTop';

export const Table = () =>
{
    const columns = TableHead();
    const data = Data();
    return(
        <div>
            <TableTop title='Lista'/>
            <DataTable 
            columns={columns}
            data = {data}
            pagination
            />
        </div>
    )
}