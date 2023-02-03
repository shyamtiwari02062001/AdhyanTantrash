import {
  SET_ALL,
  SET_ANIMAL_BIRDS,
  SET_EASY_ANIMAL,
  SET_EASY_BIRD,
  SET_EASY_BODY,
  SET_EASY_FRUIT,
  SET_EASY_NUMBER,
  SET_EASY_VEGETABLE,
  SET_FRUIT_VEGETABLE,
  SET_NUMBER_BODYPARTS,
  SET_PROFILE,
} from '../actions/gameData';
const initialState = {
  easyFruit: [],
  easyVegetabel: [],
  easyAnimal: [],
  easyBird: [],
  easyBody: [],
  easyNumber: [],
  numberBodyPart: [],
  animalBirds: [],
  fruitVegetable: [],
  all: [],
  profile: [{name: '', point: '0', games: '0', attempt: '0'}],
};
const EasyFruitGame = (state = initialState, action) => {
  switch (action.type) {
    case SET_EASY_FRUIT: {
      return {
        ...state,
        easyFruit: action.easyFruit,
      };
    }
    case SET_EASY_VEGETABLE: {
      return {
        ...state,
        easyVegetabel: action.easyVegetabel,
      };
    }
    case SET_EASY_ANIMAL: {
      return {
        ...state,
        easyAnimal: action.easyAnimal,
      };
    }
    case SET_EASY_BIRD: {
      return {
        ...state,
        easyBird: action.easyBird,
      };
    }
    case SET_EASY_BODY: {
      return {
        ...state,
        easyBody: action.easyBody,
      };
    }
    case SET_EASY_NUMBER: {
      return {
        ...state,
        easyNumber: action.easyNumber,
      };
    }
    case SET_NUMBER_BODYPARTS: {
      return {
        ...state,
        numberBodyPart: action.numberBodyPart,
      };
    }
    case SET_ANIMAL_BIRDS: {
      return {
        ...state,
        animalBirds: action.animalBirds,
      };
    }
    case SET_FRUIT_VEGETABLE: {
      return {
        ...state,
        fruitVegetable: action.fruitVegetable,
      };
    }
    case SET_ALL: {
      return {
        ...state,
        all: action.all,
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default: {
      return state;
    }
  }
};
export default EasyFruitGame;
