let pessoas_alturas = require ('./modulos/pessoas.js');

let Calculos_pessoas = {
    
    altura_maior_menor : function (array){
        const maior = array.reduce(function(prev, current) { 
            return prev.altura > current.altura ? prev : current; 
        });
        const menor = array.reduce(function(prev, current) { 
            return prev.altura < current.altura ? prev : current; 
        });
        
        console.log("A maior altura é do:", maior, "e a menor altura é do: ", menor)
        return "";
    },

    media_altura : function (array){
        let selecao = array.filter(array => (array.sexo === "F"));
    
        let somaAltura = 0
        for (let i = 0; i < selecao.length; i++) {
            somaAltura += selecao[i].altura
        }
        let media = somaAltura / selecao.length;
        
        console.log("A média de altura das mulheres é de: " + media.toFixed(2))
        return "";
    },

    num_hom : function (array){
        let selecao = array.filter(array =>(array.sexo === "M"))
    
     console.log("O número total de homens é de:",selecao.length)
     return "";
    }
}


console.log(Calculos_pessoas.altura_maior_menor(pessoas_alturas));
console.log(Calculos_pessoas.media_altura(pessoas_alturas));
console.log(Calculos_pessoas.num_hom(pessoas_alturas));