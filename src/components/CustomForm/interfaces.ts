export type Inputs = {
    fullName: string,
    email: string,
    password: string,
    repeatPassword: string,
};

export type ErrorsInputs = {
    isFullName: boolean,
    isEmail: boolean,
    isLength: number,
    isAnUpper: number,
    isNoAlphanumeric: number,
    isLeastOneNumerical: number,
    noMatch?: boolean,
};
