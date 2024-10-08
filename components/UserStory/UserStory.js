import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import style from './style';

const UserStory = (props) => {
  const { firstName, profileImage } = props;
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={profileImage} style={style.image} />
      </View>
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};

export default UserStory;
