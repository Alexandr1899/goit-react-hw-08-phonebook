import { useDispatch } from "react-redux"
import { signup } from "Redux/Auth/operations";
import { ButtonSignUp, InputSignUp } from "./SignUp.styled";

export const SignUp = () => {
    const dispatch = useDispatch()
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        dispatch(signup({ email, password, name }))
        event.target.reset()
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label>name<InputSignUp type="name" autoComplete="true" autoFocus name="name"/></label><br/>
            <label>email<InputSignUp type="email" autoComplete="true" name="email" /></label><br/>
            <label>password<InputSignUp type="password" name="password" /></label><br/>
            <ButtonSignUp type="submit">Log in</ButtonSignUp>
        </form>
    </div>
}