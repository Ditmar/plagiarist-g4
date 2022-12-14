import { useTable } from "./Table_head";
import { useData } from "./Data";
import DataTable from "react-data-table-component";
import {Head} from './Table_top';

export const Table = () =>
{
    const columns = useTable();
    const data = useData();
    return(
        <di>
        <Head title='Lista'/>
        <DataTable 
        columns={columns}
        data = {data}
        pagination
        />
        </di>
    )
}