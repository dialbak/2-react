import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Caption } from "../styles/TextStyles"

const MenuButton = props => {
  const { item } = props
  return (
    <Link external to={item.link} onClick={props.onClick}>
      <MenuItem hasTitle={!item.title ? false : true} href={item.link}>
        <img src={item.icon} alt={"img"} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled(Caption)`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => (props.hasTitle ? "10px" : "0px")};
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  transition: 0.5s ease-out;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

export default MenuButton
