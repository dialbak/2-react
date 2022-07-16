import React from "react"
import styled from "styled-components"

const Video = () => {
  return (
    <SectionVideo>
      <iframe
        title="This is a short video about me"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7pgFmNRvskg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </SectionVideo>
  )
}

const SectionVideo = styled.div`
  margin: 20px auto;
  padding: 20px 100px;

  @media (max-width: 550px) {
    grid-template-columns: auto;
    padding: 0 0;
    margin: 0 0;
  }
`

export default Video
