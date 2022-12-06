import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { LayoutDiv, LayoutList, NavLinkList } from "./Layout.styled"

export const Layout = () => {
    const email = useSelector(state => state.auth.user.email)
    return <div>
        <LayoutDiv>
            <LayoutList>
                {!email ? (<><li><NavLinkList to="/sign_up">Sign Up</NavLinkList></li>
                <li><NavLinkList to="/">Log in </NavLinkList>
                </li></>) :
                <li><NavLinkList to="/contacts">Contacts</NavLinkList></li>}
            </LayoutList>
            <UserMenu />
        </LayoutDiv>
        <Outlet />
    </div>
}