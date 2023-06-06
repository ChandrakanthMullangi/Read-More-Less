import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BlogSection = styled.section`
  height: 800px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  margin-bottom: 0px;
  color: 1e293b;
`

export const Description = styled.p`
  font-family: Roboto;
  color: #334155;
  font-size: 18px;
`

export const Image = styled.img`
  height: auto;
  width: 350px;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`

export const Text = styled.p`
  font-family: Roboto;
  color: #334155;
  font-size: 18px;
  line-height: 25px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`

export const Button = styled.button`
  font-family: Roboto;
  background-color: #1f81ff;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 10px;
`
