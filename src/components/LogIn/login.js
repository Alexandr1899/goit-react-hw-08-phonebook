import { useDispatch } from "react-redux"
import { login } from "Redux/Auth/operations";
import { ButtonLogin, InputLogin } from "./Login.styled";

export const LogIn = () => {
    const dispatch = useDispatch()
    function handleSubmit(event) {
        event.preventDefault()
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        dispatch(login({ email, password }))
        event.target.reset()
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label>email<InputLogin type="email" autoFocus name="email"/></label><br/>
            <label>password<InputLogin type="password" name="password" /></label><br/>
            <ButtonLogin type="submit">Log in</ButtonLogin>
        </form>
    </div>
}