import {SectionGrid} from 'react-native-super-grid';
import {Text, StyleSheet} from 'react-native';
import CardButton from './cardButton';
const CardGrid = ({data}) => {
  return (
    <SectionGrid
      showsVerticalScrollIndicator={false}
      itemDimension={150}
      sections={data}
      renderItem={({item}) => (
        <CardButton
          image={item.image}
        navigate={item.navigate}
          text={item.text}
        />
      )}
      renderSectionHeader={({section}) => (
        <Text style={styles.subheading}>{section.title}</Text>
      )}
    />
  );
};
export default CardGrid;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold', color: '#fff'
  },
  subheadingContainer: {
    paddingLeft: 10,
    marginTop: 20,
  },
  subheading: {
    fontSize: 27,
    fontStyle: 'italic',
    marginTop: 10, color: '#fff',
    marginLeft: 10
  },
  content: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
