export const getRandomItemFromArray = (arr: any[]): any => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}