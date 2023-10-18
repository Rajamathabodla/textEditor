import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  color: white;
`
export const AppContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

export const ResponsiveContainer = styled.div`
  background-color: Black;
  padding: 20px;
  height: 80%;
  display: flex;
`
export const FirstHalf = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const UnorderList = styled.ul`
  list-style: none;
  background-color: #25262c;
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  border-color: #f8fafc;
  border-style: solid;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const ButtonContainer = styled.div`
  display: flex;
`

export const List = styled.li`
  list-style: none;
`
export const Input = styled.textarea`
  background-color: transparent;
  border: 0px;
  outline: none;
  color: white;
  font-family: 'roboto';
  font-size: 15px;
  text-decoration: ${props => props.textDec};
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.italic};
`
export const ButtonBold = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => props.color};

  cursor: pointer;
`
export const ButtonItalic = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => props.color};
`
export const ButtonUnderLine = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => props.color};
`
