import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import { UserContext } from "../../context/user.context"


import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { CartContext } from "../../context/cart.context"
import { LogoContainer, NavigationContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

const Navigation = () => {

    const { currentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
    }

    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer >
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>                    
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {
                        currentUser ?
                            (
                                <NavLink as='span' onClick={signOutHandler}>Sign Out</NavLink>
                            )
                            :
                            (
                                <NavLink to='/auth'>
                                    Sign In
                                </NavLink>
                            )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}


export default Navigation