import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = (props) => {
  const { firstName, profileImage } = props;
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;
