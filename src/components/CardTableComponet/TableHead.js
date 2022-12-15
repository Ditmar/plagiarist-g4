
export const TableHead = () =>
{
    const columns = [
        {
            name: 'Detalle',
            selector: row => row.Detalle
        },
        {
            name: 'Autor',
            selector: row => row.Autor
        },
        {
            name: 'Editar',
            selector: row => row.Editar
        },
        {
            name: 'Descargar',
            selector: row => row.Descargar
        },
    ];
    return columns;
}