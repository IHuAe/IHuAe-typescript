import {View, Text} from 'react-native';

import MainHeaderView from 'components/layout/MainHeader';

const Main: React.FC = () => {
  return (
    <>
      <View>
        <MainHeaderView />
        <Text>Sample</Text>
      </View>
    </>
  );
};

export default Main;
