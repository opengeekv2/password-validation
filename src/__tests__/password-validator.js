const { validatePassword } = require("../password-validator");
const {expect, it} = require('@jest/globals');

it('should return true for a valid password', () => {
    expect(validatePassword('P4ssw0rd_V4l1d4t0r')).toBe(true);
});

it('should return false for a invalid password without capital letters', () => {
    expect(validatePassword('p4ssw0rd_v4l1d4t0r')).toBe(false);
});

it('should return false for a invalid password without lowercase letters', () => {
    expect(validatePassword('P4SSW0RD_V4L1D4T0R')).toBe(false);
});

it('should return false for a invalid password without numbers', () => {
    expect(validatePassword('Password_Validator')).toBe(false);
});

it('should return false for a invalid password without an underscore', () => {
    expect(validatePassword('P4ssw0rdV4l1d4t0r')).toBe(false);

});