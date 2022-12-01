import {View, Text} from 'react-native';

import MainHeaderView from 'components/layout/MainHeader';
import MainView from 'components/main/Main';

const Main: React.FC = () => {
  return (
    <>
      <View>
        <MainHeaderView />
        <MainView></MainView>
      </View>
    </>
  );
};

export default Main;
