import { useState } from "react"
import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx'

const defaultFormFields = {
    email: '',
    password: ''
}

const signInWithGoogle = async () => {
    await signInWithGooglePopup();
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Invalid User/Password')
                    break;
                case 'auth/user-not-found':
                    alert('invalid user')
                    break;
                default:
                    console.log(error)
            }

        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value, })
    }

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email'
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput label='Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <ButtonsContainer>
                    <Button type="submit">
                        Sign In
                    </Button>

                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>

        </SignInContainer>
    )
}

export default SignInForm