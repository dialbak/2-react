import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOutside = () => setIsOpen(false)

  function handleClick(event) {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <Link to={"/"}>
        <Logo>
          <img src={"/images/logos/ui-logo.svg"} alt={"logo"} />
          <span>Dialbak</span>
        </Logo>
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <HamburgerWrapper key={index}>
              <MenuButton
                item={item}
                key={index}
                onClick={e => {
                  handleClick(e)
                }}
              />
            </HamburgerWrapper>
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
      <MenuTooltip onClick={handleClick} isOpen={isOpen} />
    </Wrapper>
  )
}

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-bottom: 15px;
  }

  span {
    padding-left: 10px;
    font-family: "Pinyon Script", cursive;
    font-size: xxx-large;
    background: -webkit-linear-gradient(#eee, #e28861);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    > a {
      display: none;
    }
  }
`
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export default Header
