import { useDispatch, useSelector } from "react-redux"
import { logout } from "Redux/Auth/operations"
import { UserMenuButton, UserMenuDiv } from "./UserMenu.styled"

export const UserMenu = () => {
    const email = useSelector(state => state.auth.user.email)
    const dispatch = useDispatch()
    return <UserMenuDiv>
        <p>{email}</p>
        {email ? <UserMenuButton type="button" onClick={() => dispatch(logout())}>Logout</UserMenuButton> : null}
</UserMenuDiv>
}
