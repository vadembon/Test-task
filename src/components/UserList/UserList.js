import { useState, useEffect } from 'react';
import TweetCard from 'components/UserCard/UserCard';
import { CardList, BtnLoadMore, CardItem } from './UserList.styled';

const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tweetsPerPage] = useState(3);
  const [tweetsToShow, setTweetsToShow] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://644bd9684bdbc0cc3a9c42d4.mockapi.io/users/'
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [tweetsPerPage]);

  const indexOfLastTweet = currentPage * tweetsPerPage;

  useEffect(() => {
    setTweetsToShow(users.slice(0, indexOfLastTweet));
  }, [users, indexOfLastTweet]);

  const loadMoreTweets = () => {
    setTweetsToShow([
      ...tweetsToShow,
      ...users.slice(indexOfLastTweet, indexOfLastTweet + tweetsPerPage),
    ]);
    setCurrentPage(currentPage + 1);
  };

  return (
    <main>
      <CardList>
        {users &&
          tweetsToShow.map(user => (
            <CardItem key={user.id}>
              <TweetCard user={user} />
            </CardItem>
          ))}
      </CardList>
      {tweetsToShow.length < users.length && (
        <BtnLoadMore onClick={loadMoreTweets}>Load More</BtnLoadMore>
      )}
    </main>
  );
};

export default TweetsList;
