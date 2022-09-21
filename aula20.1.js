let espectador = [
     { idade:15,
        opiniao: bom
    },
    { idade:25,
        opiniao: otimo
    },
    { idade:16,
        opiniao: regular
    },
    { idade:33,
        opiniao: bom
    },
    { idade:22,
        opiniao: otimo
    },
    { idade:18,
        opiniao: regular
    },
    { idade:17,
        opiniao: bom
    },
    { idade:22,
        opiniao: otimo
    },
    { idade:44,
        opiniao: regular
    },
    { idade:35,
        opiniao: bom
    },
    { idade:32,
        opiniao: otimo
    },
    { idade:18,
        opiniao: regular
    },
    { idade:14,
        opiniao: bom
    },
    { idade:26,
        opiniao: otimo
    },
    { idade:19,
        opiniao: regular
    },


];
   
const lista = require('./module/scores');

//1
let otimo = lista.filter(nota => nota.opinion == 3);
let avgOtimo = otimo.reduce((total, next) => total + next.age, 0) / otimo.length;

console.log(avgOtimo);

//2
let regular = lista.filter(nota => nota.opinion == 1).length;
console.log(regular);

//3
let bom = lista.filter(nota => nota.opinion == 2).length;
let bomPercentage = (bom / lista.length)*100 + '%';
console.log(bomPercentage)

function Espectator(opinion, age){
    this.opinion = opinion;
    this.age = age
}

lista.push(new Espectator(1, 64));

console.log(lista[15]);