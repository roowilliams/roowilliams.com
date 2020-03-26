import styled from "styled-components"

// doesn't apply to markdown pages since only html tags are generated
export const Title = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 0.6rem;
`

export const Date = styled.time`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.4);
`

export const Summary = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
`

export const SectionHeader = styled.h2`
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 300;
  color: rgba(50, 50, 50, 0.7);
`
