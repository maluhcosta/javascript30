// EXERCÍCIOS DE ARRAY!    
    // # Array Cardio Day 1

    // Alguns dados com os quais podemos trabalhar:
    const inventores = [
        { nome: 'Albert', sobrenome: 'Einstein', nascimento: 1879, morte: 1955 },
        { nome: 'Isaac', sobrenome: 'Newton', nascimento: 1643, morte: 1727 },
        { nome: 'Galileo', sobrenome: 'Galilei', nascimento: 1564, morte: 1642 },
        { nome: 'Marie', sobrenome: 'Curie', nascimento: 1867, morte: 1934 },
        { nome: 'Johannes', sobrenome: 'Kepler', nascimento: 1571, morte: 1630 },
        { nome: 'Nicolaus', sobrenome: 'Copernicus', nascimento: 1473, morte: 1543 },
        { nome: 'Max', sobrenome: 'Planck', nascimento: 1858, morte: 1947 },
        { nome: 'Katherine', sobrenome: 'Blodgett', nascimento: 1898, morte: 1979 },
        { nome: 'Ada', sobrenome: 'Lovelace', nascimento: 1815, morte: 1852 },
        { nome: 'Sarah E.', sobrenome: 'Goode', nascimento: 1855, morte: 1905 },
        { nome: 'Lise', sobrenome: 'Meitner', nascimento: 1878, morte: 1968 },
        { nome: 'Hanna', sobrenome: 'Hammarström', nascimento: 1829, morte: 1909 }
    ];
  
    const pessoas = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
      
    // 1. filter
        // Array.prototype.filter()
        // Filtra a lista de inventores que nasceram nos anos 1500:
        
        const milQuinhentos = inventores.filter(inventor => (inventor.nascimento >= 1500 && inventor.nascimento < 1600));  
        
        console.table(milQuinhentos);
  

    // 2. map
      // Array.prototype.map()
      // Mostra um array com o primeiro e o último nome dos inventores:
        
        const completo = inventores.map(inventor => `${inventor.nome} ${inventor.sobrenome}`); 
        
        console.log(completo);
  

    // 3. sort
      // Array.prototype.sort()
      // Classifica os inventores por data de nascimento, do mais velho para o mais novo:

        // const ordem = inventors.sort(function(a, b) {
        //   if(a.nascimento > b.nascimento) {
        //     return 1;
        //   } else {
        //     return -1;
         //   }
        // });

        const ordem = inventores.sort((a, b) => a.nascimento > b.nascimento ? 1 : -1);     
        
        console.table(ordem);
  

    // 4. reduce
      // Array.prototype.reduce()
      // 4. Quantos anos viveu todos os inventores:
        
        const totalAnos = inventores.reduce((total, inventor) => {
            return total + (inventor.morte - inventor.nascimento);
        }, 0);

        console.log(totalAnos);
  

    // 5. Classifica os inventores por quantidade de anos vividos:
        
        const maisVelho = inventores.sort(function(a, b) {
            const sobrenomeInventor = a.morte - a.nascimento;
            const proximoInventor = b.morte - b.nascimento;
            return sobrenomeInventor > proximoInventor ? -1 : 1;
        });

      console.table(maisVelho);
  

    // 6. Criando uma lista de Boulevards in Paris que contenham 'de' em qualquer lugar do nome
        // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
            // const category = document.querySelector('.mw-category');
            // const links = Array.from(category.querySelectorAll('a'));
            // const de = links
            //             .map(link => link.textContent)
            //             .filter(streetName => streetName.includes('de'));
  

    // 7. sort (exercício):
        // Classifique as pessoas pelo sobrenome em ordem alfabética:
        
            const alfabetica = pessoas.sort((umSobrenome, proximo) => {
                const [aSobrenome, aNome] = umSobrenome.split(', ');
                const [bSobrenome, bNome] = proximo.split(', ');
                return aSobrenome > bSobrenome ? 1 : -1;
            });

            console.log(alfabetica);
  

    // 8. Reduce (exercício):
        // Resuma as instâncias de cada um desses elementos:
    
        const data = ['carro', 'carro', 'caminhao', 'caminhao', 'bicicleta', 'patinete', 'carro', 'van', 'bicicleta', 'patinete', 'carro', 'van', 'carro', 'caminhao', 'patins'];
  
        const transportes = data.reduce(function(obj, item) {
            if (!obj[item]) {
                obj[item] = 0;
            }
            obj[item]++;
            return obj;
        }, {});
  
        console.log(transportes);