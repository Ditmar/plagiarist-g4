import { BiEdit} from 'react-icons/bi';
import { Self } from "./self";
import { Downloads } from "./Downloads_status";
export const useData = ()=>{
   const data = [
    {
        Detalle:<Self info={'Contact Email not Link'}/>,
        Autor: 'Tom Cruise',
        Editar: <BiEdit />,
        Descargar:<Downloads info={'HIGH'}/>
    },
    {
        Detalle:<Self info={'Add Images to Feactured'}/>,
        Autor: 'Matt Doman',
        Editar: <BiEdit />,
        Descargar:<Downloads info={'LOW'}/>
    },
    {
        Detalle:<Self info={'When Will I be Charange'}/>,
        Autor: 'Robert Downy',
        Editar: <BiEdit />,
        Descargar:<Downloads info={'NORMAL'}/>
    },
    {
        Detalle:<Self info={'Contact Email not Link'}/>,
        Autor: 'Tom Cruise',
        Editar: <BiEdit />,
        Descargar:<Downloads info={'HIGH'}/>
    },
    {
        Detalle:<Self info={'Add Images to Feactured'}/>,
        Autor: 'Matt Doman',
        Editar: <BiEdit />,
        Descargar:<Downloads info={'LOW'}/>
    },
    {
        Detalle:<Self info={'When Will I be Charange'}/>,
        Autor: 'Robert Downy',
        Editar: <BiEdit />,
        Descargar:<Downloads info={'NORMAL'}/>
    },
    ]
    return data;
}