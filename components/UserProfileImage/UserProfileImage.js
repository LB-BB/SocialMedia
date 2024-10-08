import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import { View, Image } from 'react-native';

const UserProfileImage = (props) => {
  const {profileImage, imageDimensions} = props;
  const imDim = imageDimensions;
  return (
    <View style={[style.userImageContainer, {borderRadius: imDim}]}>
      <Image source={profileImage} style={{width: imDim, height: imDim, borderRadius: imDim }} />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
