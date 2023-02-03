import {SectionGrid} from 'react-native-super-grid';
import {Text, StyleSheet} from 'react-native';
import Button from './button';
import {Vowels} from '../constants/Alphabets/vowels';
import {AnuswaaraVisargs} from '../constants/Alphabets/anuswaaraVisargs';
import {Consonants} from '../constants/Alphabets/consonants';
import ImageButton from './imagebutton';
const ImageGrid = ({data}) => {
  return (
    <SectionGrid
      showsVerticalScrollIndicator={false}
      itemDimension={180}
      sections={data}
      renderItem={({item}) => (
        <ImageButton
          image={item.image}
          text={item.text}
          speakText={item.seachText}
        />
      )}
      renderSectionHeader={({section}) => (
        <Text style={styles.subheading}>{section.title}</Text>
      )}
    />
  );
};
export default ImageGrid;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subheadingContainer: {
    paddingLeft: 10,
    marginTop: 20,
  },
  subheading: {
    fontSize: 27,
    fontStyle: 'italic',
    marginTop: 10,
  },
  content: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
