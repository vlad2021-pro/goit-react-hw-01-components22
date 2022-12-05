import PropTypes from 'prop-types';
import {FriendCase, FriendItem, FriendStatus, FriendAvatar, FriendName  } from './FriendListItem.styled'
export const FriendListItem = ({avatar,name,isOnline, id}) => {
   return <FriendCase>
    <FriendItem class="item" key={id}>
  <FriendStatus isOnline ={isOnline}>{isOnline}</FriendStatus>
  <FriendAvatar src={avatar} alt="User avatar" width="48" /> 
  <FriendName>{name}</FriendName>
</FriendItem>
   </FriendCase>
}


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};