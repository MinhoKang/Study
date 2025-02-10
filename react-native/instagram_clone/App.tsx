import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './helper';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={{fontFamily: getFontFamily('Inter', '500')}}>
        Hello World
      </Text>
    </SafeAreaView>
  );
}

export default App;
