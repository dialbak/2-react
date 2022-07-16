import React from "react"
import styled from "styled-components"
import { logosData } from "../../data/logosData"

const HeroSkillSection = () => {
  return (
    <CoursesHero>
      <TextWrapper>
        <TextHour>Portfolio</TextHour>
        <Learn>
          Learn by doing, learn by teaching, learn by débrouille toi ...
        </Learn>
        <p style={{ color: "white" }}>
          The best way to learn something is to do it !!
        </p>
      </TextWrapper>
      <BrowseMenu>
        <Logo>
          {logosData.map((logo, index) => (
            <img src={logo} key={index} alt="logo" />
          ))}
        </Logo>
      </BrowseMenu>
    </CoursesHero>
  )
}

export default HeroSkillSection

const CoursesHero = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 380px auto;
  column-gap: 80px;
  max-width: 1234px;
  margin: 0px auto;
  padding: 0px 30px;
  align-items: flex-end;
  pointer-events: none;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`

const TextWrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
`

const TextHour = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  margin: 0px;
  color: rgba(255, 255, 255, 0.7);
`

const Learn = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin: 0px;
  color: rgba(255, 255, 255, 0.7); ;
`

const BrowseMenu = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 20px 0px;
  pointer-events: visible;
`

const Logo = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 20px;
  margin-left: 160px;

  img {
    width: 44px;
    height: 44px;
  }

  @media (max-width: 1280px) {
    margin-left: 10px;
  }
`
