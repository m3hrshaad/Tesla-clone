import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStates] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg"></img>
            </a>
            <Menu>
                {cars && cars.map((car, index) =>(
                    <a key={index} href="#">{ car }</a>
            ))}
            <a href="#">Solar Roof</a>
            <a href="#">Solar Panel</a>
            </Menu>
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
                {cars && cars.map((car, index) =>(
                    <li key={index}><a href="#">{ car }</a></li>
                ))}
                <li><a href="#">Exiting Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cyber Truck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container =  styled.div`
    min-hight: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    
    flex:1;
    justify-content: center;

    a{
        font-size: 14px;
        color: #000000;
        font-wight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
        cursor: pointer;
    }
    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-size: 13px;
        color: #000000;
        text-transform: uppercase;
        font-wight: 600;
        margin-right: 10px ;
        cursor: pointer;
    }
`

const MenuIconContainer = styled(MenuIcon)`
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
    top: 0;
    bottom: 0;
    right: 0;
    background: #ffffff;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
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



