const itemArray = [
    {
        "id": 1,
        "product": "Pão",
        "price": 5.80,
        "quantity": 3,
        "section": "Padaria"
    },
    {
        "id": 2,
        "product": "Leite",
        "price": 3.00,
        "quantity": 1,
        "section": "Derivados de Leite"
    },
    {
        "id": 3,
        "product": "Carne",
        "price": 10.00,
        "quantity": 2,
        "section": "Carne"
    },
    {
        "id": 4,
        "product": "Tomate",
        "price": 4.00,
        "quantity": 5,
        "section": "Hortifruti"
    },
]


const testMap = (array) => {

    const result = array.map((value) => {
        let { id, price } = value // Neste ponto desconstruirmos o objeto para armazenar as propriedades, id e price.
        if (id > 2) { // Aqui é validado se o id é maior que 2

            price = 2.00
            // Altere o valor da propriedade price para 2.00 dos índices com id's maior que 2
        
        }

        return {...value, price} // Nesta etapa utilizamos o spread(...), para remontar o objeto e passamos a propriedade que foi alterada
    })

    return result // Por fim é retornado um array de objetos, com as propriedades alteradas
}

console.log(testMap(itemArray))

const testFilter = (array) => {
    
    const result = array.filter( ({id}) => {
        if(id <= 2) {

            return id
        }
    })

    // retorne a variável result onde contem os resultados das filtragens
    return result
}

console.log(testFilter(itemArray))

const testFind = (array) => {

    const result = array.find( ({id, product}) => {
        
        if(product === "Leite") {

            return id
        }
    })

   return result

}

console.log(testFind(itemArray))

const testReduce = (array) => {

    const totalList = array.reduce((acc, {quantity, price}) => {
        acc += quantity * price
        
        return acc
        // retorne o valor armazenado em "acc" que neste caso é o valor total da compra
    }, 0)

    // retorne o valor de totalList para verificar quanto ficou sua compra
    return totalList
}

console.log(testReduce(itemArray))