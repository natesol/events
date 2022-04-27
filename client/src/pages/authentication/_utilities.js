const MAX_CHAR = 30;

export const validationRules = {
    // Name validation (first/last): at least 2 characters, at least 1 letter.
    name: (value) => value.length < MAX_CHAR && value.length >= 2 && /[a-zA-Z]/.test(value),
    // Phone validation: 10 digits.
    phone: (value) => value.length === 10 && /^\d+$/.test(value),
    // Email validation: RFC2822 standards.
    email: (value) =>
        value.length < MAX_CHAR &&
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
            value
        ),
    // Password validation: at least 6 characters.| at least 1 number. | at least 1 uppercase letter. | at least 1 lowercase letter.
    password: (value) => value.length < MAX_CHAR && /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/gm.test(value),
    // confirmPassword: (value) => value === form.values.password,
    // Terms and conditions validation: must be checked.
    terms: (value) => value === true,
};
