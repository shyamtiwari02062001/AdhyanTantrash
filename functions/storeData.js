import AsyncStorage from "@react-native-async-storage/async-storage";
export const storeData = async (name, data) => {
  try {
    const jsonValue = JSON.stringify(data);
    if (name === '@easyFruit') {
      await AsyncStorage.setItem('@easyFruit', jsonValue);
    } else if (name === '@easyVegetable') {
      await AsyncStorage.setItem('@easyVegetable', jsonValue);
    } else if (name === '@easyAnimal') {
      await AsyncStorage.setItem('@easyAnimal', jsonValue);
    } else if (name === '@easyBird') {
      await AsyncStorage.setItem('@easyBird', jsonValue);
    } else if (name === '@easyBody') {
      await AsyncStorage.setItem('@easyBody', jsonValue);
    } else if (name === '@easyNumber') {
      await AsyncStorage.setItem('@easyNumber', jsonValue);
    } else if (name === '@numberBody') {
      await AsyncStorage.setItem('@numberBody', jsonValue);
    } else if (name === '@fruitVegetable') {
      await AsyncStorage.setItem('@fruitVegetable', jsonValue);
    } else if (name === '@birdAnimal') {
      await AsyncStorage.setItem('@birdAnimal', jsonValue);
    } else if (name === '@all') {
      await AsyncStorage.setItem('@all', jsonValue);
    } else if (name === '@profile') {
      await AsyncStorage.setItem('@profile', jsonValue);
    }
  } catch (e) {
    console.log(e);
    // saving error
  }
};
