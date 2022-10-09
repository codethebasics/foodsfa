import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => (props.secondary ? '#3E4045' : '#3a3c40')};
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  /* div {
    width: 100%;
  } */
`

export default function Card({ children, secondary }) {
  return <Container secondary={secondary}>{children}</Container>
}
