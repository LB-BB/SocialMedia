
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import globalStyles from './assets/styles/globalStyles';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  const userStories = [
    {
      firstName: 'Hamlin',
      id: 1,
      profileImage: require('./assets/images/Hamlin.png'),
    },
    {
      firstName: 'Pique',
      id: 2,
      profileImage: require('./assets/images/Pique.jpeg'),
    },
    {
      firstName: 'Lummy',
      id: 3,
      profileImage: require('./assets/images/Lummy.jpeg'),
    },
    {
      firstName: 'Sansa',
      id: 4,
      profileImage: require('./assets/images/Sansa.jpeg'),
    },
    {
      firstName: 'Baby',
      id: 5,
      profileImage: require('./assets/images/Baby.jpeg'),
    },
    {
      firstName: 'Kid',
      id: 6,
      profileImage: require('./assets/images/Kid.jpeg'),
    },
    {
      firstName: 'Norbert',
      id: 7,
      profileImage: require('./assets/images/Norbert.jpeg'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={globalStyles.header}>
      <Title title={'Let\'s Explore'} />
      <TouchableOpacity style={globalStyles.messageIcon}>
      <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
      <View style={globalStyles.messageNumberContainer}>
        <Text style={globalStyles.messageNumber}>2</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={globalStyles.userStoryContainer}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={userStories}
        renderItem={({ item }) => {
          console.log(item); // Check if this prints correctly
          return <UserStory firstName={item.firstName} profileImage={item.profileImage} />;
        }}
        keyExtractor={item => item.id.toString()}
      />
      </View>
    </SafeAreaView>
  );
};

export default App;
