/* ------------------------------------------------------------------------------------------------ */
/* ---- Global Form Validations Rules ------------------------------------------------------------- */

// Form max input length.
const FORM_INPUT_MAX_CHAR = 30;

// Name validation (first/last): at least 2 characters, at least 1 letter.
export const validateName = {
    name: (name) => name.length < FORM_INPUT_MAX_CHAR && name.length >= 2 && /[a-zA-Z]/.test(name),
};

// Phone validation: 10 digits.
export const validatePhone = {
    phone: (phoneNumber) => phoneNumber.length === 10 && /^\d+$/.test(phoneNumber),
};

// Email validation: RFC2822 standards.
export const validateEmail = {
    email: (email) =>
        email.length < FORM_INPUT_MAX_CHAR &&
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
            email
        ),
};

// Password validation: at least 6 characters.| at least 1 number. | at least 1 uppercase letter. | at least 1 lowercase letter.
export const validatePassword = {
    password: (password) =>
        password.length < FORM_INPUT_MAX_CHAR && /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/gm.test(password),

    confirmPassword: (password1, password2) => password1 === password2,
};

// Terms and conditions validation: must be checked.
export const validateChecks = {
    terms: (checked) => checked === true,
};

// Full form validation rules.
export const validationRules = {
    name: validateName.name,
    phone: validatePhone.phone,
    email: validateEmail.email,
    password: validatePassword.password,
    confirmPassword: validatePassword.confirmPassword,
    terms: validateChecks.terms,
};

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
