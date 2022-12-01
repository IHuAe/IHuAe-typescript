import {View} from 'react-native';
import styled from 'styled-components/native';

import {color} from 'styles/Theme';

const MainView = () => {
  return <Main.Container></Main.Container>;
};

const Main = {
  Container: styled.View`
    flex-grow: 1;
    color: ${color.bg.bg_01};
  `,
};

export default MainView;
