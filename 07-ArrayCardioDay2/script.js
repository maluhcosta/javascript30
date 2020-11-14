// EXERCÍCIOS DE ARRAY!    
    // # Array Cardio Day 2

    const pessoas = [
        { nome: 'Wes', ano: 1988 },
        { nome: 'Kait', ano: 1986 },
        { nome: 'Irv', ano: 1970 },
        { nome: 'Lux', ano: 2015 }
    ];
  
    const comentarios = [
        { texto: 'Love this!', id: 523423 },
        { texto: 'Super good', id: 823423 },
        { texto: 'You are the best', id: 2039842 },
        { texto: 'Ramen is my fav food ever', id: 123523 },
        { texto: 'Nice Nice Nice!', id: 542328 }
    ];


    // 1. some
        // Array.prototype.some()
        // Procurar todas as pessoas maiores de 18:

            const adulto  = pessoas.some(function(pessoa) {
                    const anoAtual = (new Date()).getFullYear();
                    if(anoAtual - pessoa.ano >= 18) {
                        return true;
                    }
            });

            //adulto = pessoas.some(pessoa => ((new Date()).getFullYear()) - pessoa.ano >= 18);
            //console.log({todosAdultos});
     
            
    // 2. find
        // Array.proptotype.find()
        // Retorna apenas o resultado procurado.
            // Encontre o comentário com o ID de 823423:

            let comentarios = comentarios.find(comentarios => comentarios.id === 823423);

            console.log(comentarios);


    // 3. findIndex
        // Array.prototype.findIndex()
        // Encontra o comentário com este ID.
            // Exclua o comentário com o ID 823423:

            const findIndex = comentarios.findIndex(comentarios => comentarios.id === 823423);

            console.log(index);


        //comentarios.splice(index, 1);

            const novosComentarios = [
                ...comentarios.slice(0, index),
                ...comentarios.slice(index + 1)
            ];