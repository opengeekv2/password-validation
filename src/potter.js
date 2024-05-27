exports.calculateBasket = (basket) => {
    const bookCount = [0, 0, 0, 0, 0];
    basket.forEach((book) => {
        ++bookCount[book];
    });
    console.log(bookCount);
    const differentBooks = bookCount.filter((count) => count === 1).length;
    switch (differentBooks) {
        case 0:
        case 1:
            return 8 * basket.length;
        case 2:
            return 8 * basket.length * 0.95
        case 3:
            return 8 * basket.length * 0.90
        case 4:
            return 8 * basket.length * 0.80
        case 5:
            return 8 * basket.length * 0.75
    }
}