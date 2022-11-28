import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

import {color, layout, font} from 'styles/Theme';

// COMPONENT main component
// TODO 그림자 적용
const MainHeaderView: React.FC = () => {
  return (
    <>
      <Hd.Container>
        <Hd.Feel.Container>
          <Hd.Feel.Counter>D+4</Hd.Feel.Counter>
          <Hd.Feel.Content.Container>
            <Hd.Feel.Content.Text>
              오늘의 기분을 표현해보세요
            </Hd.Feel.Content.Text>
            <Hd.Feel.Content.Icon />
          </Hd.Feel.Content.Container>
        </Hd.Feel.Container>
        <Hd.Question.Container>
          <Hd.Question.Title>하루문답</Hd.Question.Title>
          <Hd.Question.Content.Container>
            <Hd.Question.Content.Text>
              요즘 가장 하고 싶은 게 뭐에요?
            </Hd.Question.Content.Text>
            <Hd.Question.Content.Btn>
              <Hd.Question.Content.BtnText>
                기록하기
              </Hd.Question.Content.BtnText>
            </Hd.Question.Content.Btn>
          </Hd.Question.Content.Container>
        </Hd.Question.Container>
      </Hd.Container>
    </>
  );
};

// COMPONENT style
const Hd = {
  Container: styled.View`
    background: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 8px 20px;
    padding-bottom: 32px;
  `,
  Feel: {
    Container: styled.View`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: ${layout.headerHeight};
    `,
    Counter: styled.Text`
      color: ${color.main.main};
      font-size: 24px;
      ${font.sans.bold}
    `,
    Content: {
      Container: styled.View`
        flex-direction: row;
        align-items: center;
      `,
      Text: styled.Text`
        color: ${color.main.main};
        font-size: 12px;
        ${font.sans.bold}
      `,
      Icon: styled.View`
        border-radius: 100px;
        width: 28px;
        height: 28px;
        border: 2px dashed ${color.main.main};
        margin-left: 12px;
      `,
    },
  },
  Question: {
    Container: styled.View`
      margin-top: 20px;
    `,
    Title: styled.Text`
      color: ${color.main.main};
      font-size: 12px;
      ${font.sans.bold}
    `,
    Content: {
      Container: styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
      `,
      Text: styled.Text`
        color: ${color.main.main};
        font-size: 16px;
        ${font.sans.medium}
      `,
      Btn: styled.TouchableOpacity`
        width: 82px;
        height: 28px;
        background: ${color.main.main};
        border-radius: 4px;
        justify-content: center;
        align-items: center;
      `,
      BtnText: styled.Text`
        color: #fff;
        font-size: 12px;
        ${font.sans.medium}
      `,
    },
  },
};

export default MainHeaderView;
