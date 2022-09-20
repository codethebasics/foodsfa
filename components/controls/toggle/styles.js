import styled from 'styled-components'

export const ToggleContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .description {
    font-size: 0.8rem;
  }
`

export const ToggleButton = styled.div`
  display: flex;
  background: #3d3d3d;
  width: 75px;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;

  div {
    background: #4a4a4a;
    width: 50%;
    padding: 10px;
    border-radius: 50px;
  }
  &.active {
    background: #ffcc00;
    justify-content: flex-end;
  }
`
