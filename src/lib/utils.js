export const completePokedexNumber = (number) => {
    let pokedexNumber = ""
    for (let i = number.toString().length; i < 3; i++) {
        pokedexNumber = pokedexNumber + "0"
    }
    return pokedexNumber + number
}