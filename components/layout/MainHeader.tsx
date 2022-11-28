import styled from 'styled-components/native';
import {View, Text} from 'react-native';

import {color, layout} from 'styles/Theme';

// COMPONENT main component
const MainHeaderView: React.FC = () => {
  return (
    <>
      <MainHeader.Container>
        <MainHeader.Top.Container>
          <MainHeader.Top.Counter>D+4</MainHeader.Top.Counter>
        </MainHeader.Top.Container>
      </MainHeader.Container>
    </>
  );
};

// COMPONENT style
const MainHeader = {
  Container: styled.View`
    border: 1px solid red;
    background: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  `,
  Top: {
    Container: styled.View`
      flex-direction: row;
      justify-content: space-between;
      height: ${layout.headerHeight};
    `,
    Counter: styled.Text`
      color: ${color.main.main};
      font-size: 24px;
      font-weight: bold;
    `,
  },
};

export default MainHeaderView;
