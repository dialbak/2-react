import React from "react"
import styled from "styled-components"
import { Caption, SmallText } from "../styles/TextStyles"

const VideoButton = ({ title, subtitle, playVideo, img }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon src="/images/icons/livestreams.svg" className="icon" />
        <Ring src="/images/icons/icon-ring.svg" />
      </IconWrapper>
      <TextWrapper>
        <Title>{title} </Title>
        <Subtitle>
          {subtitle}
          <span>
            <Play onClick={playVideo} src={img} />
          </span>
        </Subtitle>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  justify-content: start;
  align-items: center;
  gap: 20px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);

    .icon {
      transform: scale(1.2);
    }
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(Caption)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg);
  }
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`

const Play = styled.img`
  margin-left: 25px;
  border-radius: 15%;
  background-color: #d5d7d7;
`

export default VideoButton
