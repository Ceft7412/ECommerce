import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import ButtonAuth from '../../components/ButtonAuth';
import {images} from '../../constants/coverImages';
import app from '../../services/firebase/firebaseConfig';

export default function ContextScreen({navigation}: {navigation: any}) {
  const screenWidth = Dimensions.get('window').width;
  // const screenHeight = Dimensions.get('window').height;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollViewRef = useRef<ScrollView>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // check if app is already initialized

  // if (app)

  useEffect(() => {
    if (app) {
      console.log('app is already initialized', app);
      app.name;
    }
  }, []);
  // handle auto scroll
  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollViewRef.current?.scrollTo({
          x: nextIndex * screenWidth,
          animated: true,
        });
        return nextIndex;
      });
    }, 4000);
  };
  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  });
  // handle scrolling
  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    console.log(contentOffsetX);
    console.log(screenWidth);
    const index = Math.round(contentOffsetX / screenWidth);
    console.log(index);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* The cover must be an images */}
      <View style={styles.coverIcons}>
        <ScrollView
          ref={scrollViewRef}
          onMomentumScrollEnd={handleScrollEnd}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}>
          {images.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={[{width: screenWidth}, styles.logo]}
            />
          ))}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonAuth
          title="Login"
          onPress={() => navigation.navigate('Login')}
          buttonStyle={{backgroundColor: 'orange'}}
          textStyle={{color: 'white'}}
        />

        <ButtonAuth
          title="Sign up"
          onPress={() => navigation.navigate('Register')}
          textStyle={{color: 'black'}}
          buttonStyle={{borderColor: 'black', borderWidth: 1}}
        />

        <View>
          <Text>Continue as Guest</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  coverIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '70%',
    backgroundColor: 'red',
  },
  // Make the logo fill the view
  logo: {
    resizeMode: 'cover',
  },
  // Image must fill the view
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },

  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: 'orange',
  },
  buttonsContainer: {
    padding: 20,
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
  },
});
