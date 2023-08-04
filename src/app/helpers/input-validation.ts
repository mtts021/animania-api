import { BadRequestError } from './api-error';

// get a string in parameters and return a boolean, true if the string is a valid email, false otherwise
export class Validator {
    static emailValidation(email) {
        if (!email) {
            throw new BadRequestError('The email is missing');
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            throw new BadRequestError('The email is not valid');
        }

        if (email.length > 80) {
            throw new BadRequestError('The email is too long');
        }
    }

    static passwordValidation(password) {
        // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!password) {
            throw new BadRequestError('The password is missing');
        }
        if (password.length < 8) {
            throw new BadRequestError('The password is too short');
        }
        if (password.length > 80) {
            throw new BadRequestError('The password is too long');
        }
    }
}
