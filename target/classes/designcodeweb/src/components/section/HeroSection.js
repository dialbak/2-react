import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import VideoButton from "../buttons/VideoButton"
import MockupAnimation from "../MockupAnimation/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
import Video from "../video/Video"
import SkillSection from "../skills/SkillSection"
import { skillsData } from "../../data/skillsData"
import HeroSkillSection from "./HeroSkillSection"

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false)
  let imgSrc
  showVideo
    ? (imgSrc = "/images/icons/stop.svg")
    : (imgSrc = "/images/icons/play.svg")

  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design & code <span>Javascript apps</span>
          </Title>
          <Description>
            I am passionate about coding and learning new things.
          </Description>
          <VideoButton
            title={"Who i am ?"}
            subtitle={"3mn videos"}
            playVideo={() => setShowVideo(!showVideo)}
            img={imgSrc}
          />
        </TextWrapper>
        {showVideo ? <Video /> : <MockupAnimation />}
      </ContentWrapper>
      <HeroSkillSection />
      {skillsData.map((skill, index) => (
        <SkillSection key={index} {...skill} />
      ))}
    </Wrapper>
  )
}

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
    filter: blur(10px);
  }
  80% {
    opacity: 0.5;
    transform: translateY(-10px);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 550px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    :nth-child(1) {
      animation: ${animation} 1s forwards;
    }

    :nth-child(2) {
      animation: ${animation} 1s 0.4s forwards;
    }

    :nth-child(3) {
      animation: ${animation} 1s 0.6s forwards;
    }
  }
`

const Title = styled(H1)`
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`

const Description = styled(MediumText)``

export default HeroSection
