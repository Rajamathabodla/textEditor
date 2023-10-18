import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Heading,
  AppContainer,
  ResponsiveContainer,
  FirstHalf,
  UnorderList,
  List,
  Input,
  ButtonBold,
  ButtonItalic,
  ButtonUnderLine,
  ButtonContainer,
} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {isbold: false, isItalic: false, isUnderline: false}

  bold = () => {
    const {isbold} = this.state
    this.setState({isbold: !isbold})
  }

  italicbtn = () => {
    const {isItalic} = this.state
    this.setState({isItalic: !isItalic})
  }

  underline = () => {
    const {isUnderline} = this.state
    this.setState({isUnderline: !isUnderline})
  }

  render() {
    const {isbold, isItalic, isUnderline} = this.state
    const color = isbold ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'
    const underLineColor = isUnderline ? '#faff00' : '#f1f5f9'

    const textDec = isUnderline ? 'underline' : 'normal'
    const boldFont = isbold ? 'bold' : 'normal'
    const italic = isItalic ? 'italic' : 'normal'
    return (
      <AppContainer>
        <ResponsiveContainer>
          <FirstHalf>
            <Heading>Text Editor</Heading>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="editorImg"
            />
          </FirstHalf>
          <UnorderList>
            <ButtonContainer>
              <List>
                <ButtonBold
                  type="button"
                  data-testid="bold"
                  onClick={this.bold}
                  isbold={isbold}
                  color={color}
                >
                  <VscBold size={25} />
                </ButtonBold>
              </List>
              <List>
                <ButtonItalic
                  type="button"
                  data-testid="italic"
                  onClick={this.italicbtn}
                  isItalic={isItalic}
                  color={italicColor}
                >
                  <GoItalic size={25} />
                </ButtonItalic>
              </List>
              <List>
                <ButtonUnderLine
                  type="button"
                  data-testid="underline"
                  onClick={this.underline}
                  isUnderline={isUnderline}
                  color={underLineColor}
                >
                  <AiOutlineUnderline size={25} />
                </ButtonUnderLine>
              </List>
            </ButtonContainer>
            <hr />
            <Input
              type="textarea"
              textDec={textDec}
              fontWeight={boldFont}
              italic={italic}
            />
          </UnorderList>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
