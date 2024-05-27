exports.validatePassword = (password) => {
    return password !== password.toLowerCase() &&
        password !== password.toUpperCase() &&
        password.match(/\d/) > 0 &&
        password.includes('_');
}