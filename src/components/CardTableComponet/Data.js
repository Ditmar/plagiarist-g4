import { BiEdit} from 'react-icons/bi';
import { Self } from "./self";
import { DownloadStatus } from "./DownloadStatus";
export const Data = ()=>{
   const data = [
    {
        Detalle:<Self info={'Contact Email not Link'}/>,
        Autor: 'Tom Cruise',
        Editar: <BiEdit />,
        Descargar:<DownloadStatus info={'HIGH'}/>
    },
    {
        Detalle:<Self info={'Add Images to Feactured'}/>,
        Autor: 'Matt Doman',
        Editar: <BiEdit />,
        Descargar:<DownloadStatus info={'LOW'}/>
    },
    {
        Detalle:<Self info={'When Will I be Charange'}/>,
        Autor: 'Robert Downy',
        Editar: <BiEdit />,
        Descargar:<DownloadStatus info={'NORMAL'}/>
    },
    {
        Detalle:<Self info={'Contact Email not Link'}/>,
        Autor: 'Tom Cruise',
        Editar: <BiEdit />,
        Descargar:<DownloadStatus info={'HIGH'}/>
    },
    {
        Detalle:<Self info={'Add Images to Feactured'}/>,
        Autor: 'Matt Doman',
        Editar: <BiEdit />,
        Descargar:<DownloadStatus info={'LOW'}/>
    },
    {
        Detalle:<Self info={'When Will I be Charange'}/>,
        Autor: 'Robert Downy',
        Editar: <BiEdit />,
        Descargar:<DownloadStatus info={'NORMAL'}/>
    },
    ]
    return data;
}