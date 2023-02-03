import {SectionGrid} from 'react-native-super-grid';
import {Text, StyleSheet} from 'react-native';
import Button from './button';
import {Vowels} from '../constants/Alphabets/vowels';
import {AnuswaaraVisargs} from '../constants/Alphabets/anuswaaraVisargs';
import {Consonants} from '../constants/Alphabets/consonants';
const Grid = ({data}) => {
  return (
    <SectionGrid
      showsVerticalScrollIndicator={false}
      itemDimension={150}
      sections={data}
      renderItem={({item}) => (
        <Button text={item.text} speakText={item.seachText} />
      )}
      renderSectionHeader={({section}) => (
        <Text style={styles.subheading}>{section.title}</Text>
      )}
    />
  );
};
export default Grid;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subheadingContainer: {
    paddingLeft: 10,
    marginTop: 20,
  },
  subheading: {
    fontSize: 27,
    fontStyle: 'italic',
    marginTop: 10,
    color: '#fff',
    marginLeft: 5,
  },
  content: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
