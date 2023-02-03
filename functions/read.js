import Tts from "react-native-tts";
const Read = word => {
    Tts.stop();
    Tts.setDucking(true);
    Tts.setDefaultLanguage('hi-IN');
    Tts.speak(word, {
      androidParams: {
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  };
  export default Read;