import styled from 'styled-components'

export const StyledSizeOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${props => (props.selected ? '#FFCC00' : '#333')};
  color: ${props => (props.selected ? '#222' : '#fff')};
  transition: all 0.2s;

  div {
    padding: 15px;
    display: flex;

    &:first-child {
      flex-direction: column;
      flex-grow: 1;

      span {
        &:last-child {
          font-size: 0.8rem;
        }
      }
    }

    &:last-child {
      span {
        margin: 0 5px;

        &:last-child {
          margin-left: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          background: ${props => (props.selected ? '#222' : '#ffcc00')};
          color: ${props => (props.selected ? '#fff' : '#222')};
        }
      }
    }
  }
`
