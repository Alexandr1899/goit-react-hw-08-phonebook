import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const LayoutList = styled.ul`
list-style: none;
`

export const NavLinkList = styled(NavLink)`
text-decoration: none;
&.active{text-decoration: underline;}
color: black;
`

export const LayoutDiv = styled.div`
display: flex;
`