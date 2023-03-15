import { FC, useState } from 'react';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';

import Eyes from 'resources/icons/Eyes';
import User from 'resources/icons/User';
import Email from 'resources/icons/Email';
import EyeClose from 'resources/icons/EyesClose';
import statusInput from 'helpers/statusInput';
import { ErrorsInputs, Inputs } from './interfaces';
import "./styles.scss";

interface ICustomsFormProps {};

const CustomForm: FC = ({}: ICustomsFormProps) => {

    const [inputs, setInputs] = useState<Inputs>({
        fullName: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const [errors, setErrors] = useState<ErrorsInputs>({
        isFullName: false,
        isEmail: false,
        isLength: 0,
        isAnUpper: 0,
        isNoAlphanumeric: 0,
        isLeastOneNumerical: 0,
        noMatch: false,
    })

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prevState => ({ ...prevState, [name]: value }))

        if(name === "fullName") {
            if(value.length < 3) {
                setErrors(prevState => ({ ...prevState, isFullName: true }))
            } else {
                setErrors(prevState => ({ ...prevState, isFullName: false }))
            }
        }

        if(name === "email") {
            if(!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(value)) {
                setErrors(prevState => ({ ...prevState, isEmail: true }))
            } else {
                setErrors(prevState => ({ ...prevState, isEmail: false }))
            }
        }
        
        if(name === "password") {
            
            if(value.length < 8) {
                setErrors(prevState => ({ ...prevState, isLength: 1 }))
            } else {
                setErrors(prevState => ({ ...prevState, isLength: 2 }))
            }

            if(!/[A-Z]/.test(value)) {
                setErrors(prevState => ({ ...prevState, isAnUpper: 1 }))
            } else {
                setErrors(prevState => ({ ...prevState, isAnUpper: 2 }))
            }

            if(!/[0-9]/.test(value)) {
                setErrors(prevState => ({ ...prevState, isLeastOneNumerical: 1 }))
            } else {
                setErrors(prevState => ({ ...prevState, isLeastOneNumerical: 2 }))
            }

            if(!/(?=.*[@#$%^&+=·"'])(?=\S+$).{0,16}/.test(value)) {
                setErrors(prevState => ({ ...prevState, isNoAlphanumeric: 1 }))
            } else {
                setErrors(prevState => ({ ...prevState, isNoAlphanumeric: 2 }))
            }

            if(inputs.repeatPassword !== value) {
                setErrors(prevState => ({ ...prevState, noMatch: true }))
            } else {
                setErrors(prevState => ({ ...prevState, noMatch: false }))
            } 
        }

        if(name === "repeatPassword") {
            if(inputs.password !== value) {
                setErrors(prevState => ({ ...prevState, noMatch: true }))
            } else {
                setErrors(prevState => ({ ...prevState, noMatch: false }))
            } 
        }
    }

    const onSubmit = () => {
        console.log({inputs})
    }

    return (
        <section>
            <form
                noValidate
                autoComplete="off"
            >
                <OutlinedInput
                    placeholder="Full name"
                    type='text'
                    onChange={onChange}
                    name="fullName"
                    value={inputs.fullName}
                    error={errors.isFullName}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="toggle password visibility"
                                onMouseDown={handleMouseDownPassword}
                                edge="start"
                            >
                                <User />
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <OutlinedInput
                    placeholder="Email"
                    type='text'
                    onChange={onChange}
                    name="email"
                    error={errors.isEmail}
                    value={inputs.email}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                onMouseDown={handleMouseDownPassword}
                                edge="start"
                            >
                                <Email />
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <OutlinedInput
                    placeholder="********"
                    type={showPassword ? 'text' : 'password'}
                    onChange={onChange}
                    name="password"
                    error={errors.noMatch}
                    value={inputs.password}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="start"
                            >
                                {showPassword ? <Eyes /> : <EyeClose /> }
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <OutlinedInput
                    placeholder="********"
                    type={showPassword ? 'text' : 'password'}
                    onChange={onChange}
                    name="repeatPassword"
                    error={errors.noMatch}
                    value={inputs.repeatPassword}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="start"
                            >
                                {showPassword ? <Eyes /> : <EyeClose /> }
                            </IconButton>
                        </InputAdornment>
                    }
                />

                {errors.noMatch ? <p className='noMatch'>Passwords do not match</p> : undefined}

                <button
                    type="button"
                    onClick={onSubmit}
                >
                    Enviar
                </button>
            </form>

            <p className={statusInput(errors.isLength)} >Should be eight characters long</p>
            <p className={statusInput(errors.isAnUpper)}>Should include an uppercas letter</p>
            <p className={statusInput(errors.isNoAlphanumeric)}>Should include two non-alphanumeric characters</p>
            <p className={statusInput(errors.isLeastOneNumerical)}>Should include at least one numerical characters</p>
        </section>
    );
}

export default CustomForm;