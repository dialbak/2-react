import React from "react"
import styled from "styled-components"
import { Caption } from "../styles/TextStyles"
import { Link } from "gatsby"

const SkillSection = ({
  title,
  description,
  imgSrc,
  orderDisplay,
  demoLink,
  sourceCodeLink,
}) => {
  return (
    <ParentSection>
      {orderDisplay === 1 ? (
        <>
          <WrapperArticle>
            <h2>{title}</h2>
            <p>{description}</p>
            <ButtonWrapper>
              <Link external to={demoLink}>
                <MenuItem>Demo</MenuItem>
              </Link>
              <Link external to={sourceCodeLink}>
                <MenuItem>Source code</MenuItem>
              </Link>
            </ButtonWrapper>
          </WrapperArticle>
          <Img src={imgSrc} />
        </>
      ) : (
        <>
          <Img src={imgSrc} />
          <WrapperArticle>
            <h2>{title}</h2>
            <p>{description}</p>
            <ButtonWrapper>
              <Link external to={demoLink}>
                <MenuItem>Demo</MenuItem>
              </Link>
              <Link external to={sourceCodeLink}>
                <MenuItem>Source code</MenuItem>
              </Link>
            </ButtonWrapper>
          </WrapperArticle>
        </>
      )}
    </ParentSection>
  )
}

const ParentSection = styled.div`
  text-align: center;
  padding: 80px 25px 80px !important;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const WrapperArticle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin-right: 4em;
  margin-left: 4em;
  margin-top: -10px;

  h2 {
    font-size: 20px;
    text-shadow: 5px 10px 15px black;
    color: white;
    line-height: 1.5;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: white;
    line-height: 1.5;
  }
`

const Img = styled.img`
  font-family: helvetica;
  text-align: center;
  width: 50%;
  height: 50%;
  box-shadow: 0 14px 25px 15px #1c1f2c;
  border-radius: 5px;
`

const MenuItem = styled(Caption)`
  color: rgba(255, 255, 255, 0.7);
  align-items: center;
  padding: 10px 15px;
  margin: 10px 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background: rgb(124, 156, 200);

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default SkillSection
