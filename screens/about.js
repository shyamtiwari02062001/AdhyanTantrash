import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../components/header';
const About = () => {
  return (
    <>
      <Header title={'About'} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.text}>
            We decided to build an app which will cover all the aspects to learn
            a particular language and our focused language is Sanskrit. We
            provide the game features so that a one can learn while playing
            games with an enjoyment, also we added audio effect in Indian accent
            so that one will not only read but also understand the words, and
            learn to pronounce them properly. We have added different types of
            interactive features (levels of learning) to our application like
            word formation, so that we can develop one’s brain to understand
            Sanskrit in depth.
          </Text>
          <Text style={styles.text}>
            We will also be adding Grammar section, which will help one to learn
            grammar to form sentences. Our plan is to include, other things like
            the shlokas of Bhagavat Geeta, Panchatantra stories, from which a
            one can learn the history of India and its culture in our upcomming
            release.
          </Text>
          <Text style={styles.text}>
            The last but not least our motto is not to compete but we want to
            create awareness about our own culture, so we will strive to work
            for it.
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/sir.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Mentor :- Prof. Shridhar B. Dandin</Text>
          <Text style={styles.text}>Dean Engineering & Applied Sciences</Text>
          <Text style={styles.text}>Ph.D. (P), M.S., B.E.</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/subo.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Subham Prasad</Text>
          <Text style={styles.text}>Student at SBU</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/shyam.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Shyam Tiwari</Text>
          <Text style={styles.text}>Student at SBU</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>
            Special thanks to Gourav kumar, Krishna Singh, Abhinav Kumar, Kamal
            Kishor and Abhishek Arya for helping us to accomplish our goal.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};
export default About;
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  card: {
    padding: 15,
    backgroundColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#fff',
    margin: 20,
  },
  text: {
    textAlign: 'justify',
    marginBottom: 10,
    fontSize: 22,
    color: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
});
