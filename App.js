import { DATA } from './Data';
import { FlatList, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import Row from './components/Row';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, { marginTop: StatusBar.currentHeight }]}>
      <FlatList
        data={DATA}
        renderItem = {({item}) => (
          <Row person={item} />
        )}
        ></FlatList>
    </SafeAreaView>
  );
}
/*
function renderItem({item}) {
  return (<Text>{item.lastname}</Text>);
}
*/
const renderItem = ({item}) => (
  <Text>{item.lastname}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
