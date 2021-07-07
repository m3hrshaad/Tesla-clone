import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStates] = useState(false);

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg"></img>
            </a>
            <MenuGroup>
                <div><a href="#">Model S</a></div>
                <div><a href="#">Model 3</a></div>
                <div><a href="#">Model X</a></div>
                <div><a href="#">Model Y</a></div>
                <div><a href="#">Solar Roof</a></div>
                <div><a href="#">Solar Panel</a></div>
            </MenuGroup>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <MenuIconContainer onClick={()=> setBurgerStates(true)}>
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status={burgerStatus}>
                <CloseContainer>
                <Close onClick={()=> setBurgerStates(false)}/>
                </CloseContainer>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Exiting inventory</a></li>
                <li><a href="#">Used inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container =  styled.div`
    display: flex;
    min-hight: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    
`

const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    padding-top: 15px; 
    div{
        font-size: 13px;
        color: #000000;
        font-wight: 600;
        padding: 0 15px;
        cursor: pointer;
    }
    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 15px;
    }
    
`

const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Close = styled(CloseIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: #ffffff;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-styled: none;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a{
            font-weight: 600;
        }
    }
`


