// Exercício 3

// Crie uma aplicação Node que receba uma string representando uma tarefa. 
//O programa deve adicionar a nova tarefa em uma variável que represente 
//uma lista de tarefas. A lista de tarefas pode estar criada antes da 
//execução do código. Após adicionar o item à lista, exiba a lista atualizada.

    // Resposta:

    const toDoList = () => {
        const newTask = process.argv[2]; 
        const tasksList = [
            "Fazer o exercícios práticos da Labenu",
            "Escrever meu C.V."
        ];

        tasksList.push(newTask);

        console.log("Tarefa adicionada com sucesso!");
        console.log(tasksList);
    };
    toDoList();