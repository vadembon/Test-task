import numeral from 'numeral';
import usePersistedState from 'components/hooks/usePersistedState';

import {
  CardBox,
  ImgAvatar,
  LineAvatar,
  BgAvatar,
  NameTitle,
  TweetTitle,
  FollowerTitle,
  Btn,
} from './UserCard.styled';

const TweetCard = ({ user }) => {
  const [followState, setFollowState] = usePersistedState(
    `followState-${user.id}`,

    {
      isFollowing: false,
      followersCount: user.followers,
    }
  );

  const handleFollowClick = () => {
    const { isFollowing, followersCount } = followState;

    setFollowState({
      isFollowing: !isFollowing,
      followersCount: isFollowing ? followersCount - 1 : followersCount + 1,
    });
  };

  const { isFollowing, followersCount } = followState;

  const { name, tweets, avatar } = user;

  return (
    <CardBox>
      <LineAvatar>
        <BgAvatar>
          <ImgAvatar src={avatar} alt={`Avatar of ${name}`} />
        </BgAvatar>
      </LineAvatar>
      <NameTitle>{name}</NameTitle>
      <TweetTitle>{tweets} Tweets</TweetTitle>
      <FollowerTitle>
        {numeral(followersCount).format('0,0')} Followers
      </FollowerTitle>
      <Btn
        onClick={handleFollowClick}
        style={{
          backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF',
          color: '#373737',
        }}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Btn>
    </CardBox>
  );
};

export default TweetCard;
