type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const listaNegativados = (listaTodosClientes : Cliente[]) : Cliente[] => {
    const listaSaldoAtualizado = listaTodosClientes.map((cliente) => {
        let novoSaldo : number = cliente.saldoTotal;
        for (let debito of cliente.debitos) {
            novoSaldo = novoSaldo - debito;
        }
        return {...cliente, saldoTotal: novoSaldo, debitos: []}
    })

    const listaNegativados : Cliente[] = listaSaldoAtualizado.filter((cliente) => {
        return cliente.saldoTotal < 0;
    });
    
    return listaNegativados;
};

console.table(listaNegativados(
    [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]
));