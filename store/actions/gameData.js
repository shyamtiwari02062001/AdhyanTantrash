export const SET_EASY_FRUIT = 'SET_EASY_FRUIT';
export const SET_EASY_VEGETABLE = 'SET_EASY_VEGETABLE';
export const SET_EASY_ANIMAL = 'SET_EASY_ANIMAL';
export const SET_EASY_BIRD = 'SET_EASY_BIRD';
export const SET_EASY_BODY = 'SET_EASY_BODY';
export const SET_EASY_NUMBER = 'SET_EASY_NUMBER';
export const SET_NUMBER_BODYPARTS = 'SET_NUMBER_BODYPARTS';
export const SET_ANIMAL_BIRDS = 'SET_ANIMAL_BIRDS';
export const SET_FRUIT_VEGETABLE = 'SET_FRUIT_VEGETABLE';
export const SET_ALL = 'SET_ALL';
export const SET_PROFILE = 'SET_PROFILE';
export const setEasyFruit = easyFruit => {
  return {
    type: SET_EASY_FRUIT,
    easyFruit,
  };
};
export const setEasyVegetable = easyVegetabel => {
  return {
    type: SET_EASY_VEGETABLE,
    easyVegetabel,
  };
};
export const setEasyAnimal = easyAnimal => {
  return {
    type: SET_EASY_ANIMAL,
    easyAnimal,
  };
};

export const setEasyBird = easyBird => {
  return {
    type: SET_EASY_BIRD,
    easyBird,
  };
};

export const setEasyBody = easyBody => {
  return {
    type: SET_EASY_BODY,
    easyBody,
  };
};

export const setEasyNumber = easyNumber => {
  return {
    type: SET_EASY_NUMBER,
    easyNumber,
  };
};

export const setNumberBodyParts = numberBodyPart => {
  return {
    type: SET_NUMBER_BODYPARTS,
    numberBodyPart,
  };
};

export const setAnimalBirds = animalBirds => {
  return {
    type: SET_ANIMAL_BIRDS,
    animalBirds,
  };
};

export const setFruitVegetable = fruitVegetable => {
  return {
    type: SET_FRUIT_VEGETABLE,
    fruitVegetable,
  };
};

export const setAll = all => {
  return {
    type: SET_ALL,
    all,
  };
};
export const setProfile = profile => {
  return {
    type: SET_PROFILE,
    profile,
  };
};
