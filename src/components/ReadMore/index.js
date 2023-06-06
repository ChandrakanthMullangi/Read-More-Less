// Write your code here

import {useState} from 'react'

import {
  Main,
  BlogSection,
  Heading,
  Description,
  Image,
  Text,
  ButtonContainer,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [readMore, setReadMore] = useState(false)

  const onClickReadMore = () => {
    setReadMore(prevState => !prevState)
  }

  return (
    <Main>
      <BlogSection>
        <Heading> React Hooks </Heading>
        <Description>Hooks are a new addition to React</Description>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Text>
          {readMore
            ? reactHooksDescription
            : `${reactHooksDescription.slice(0, 170)}`}
        </Text>
        <ButtonContainer>
          <Button type="button" onClick={onClickReadMore}>
            {readMore ? 'Read Less' : 'Read More'}
          </Button>
        </ButtonContainer>
      </BlogSection>
    </Main>
  )
}

export default ReadMore
