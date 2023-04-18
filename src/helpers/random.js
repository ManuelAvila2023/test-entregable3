export const getRandomDimension = () => {
    //? Esta función retorna un número del 1 al 126 que representa una dimención 

    return Math.floor(Math.random() * 126) +1;
}