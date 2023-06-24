import { useState } from "react";
import Card from "./Card";
import SearchBox from './SearchBox';
import GetUserData from "../utilities/userData";

const Body = () => {
    const {userData, error} = GetUserData();
  const [searchText, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleClick(searchText, users) {
      setFilteredData(() => {
       return users.filter(user => user.first_name.toLowerCase().includes(searchText.toLowerCase()))
    }
      
    );
  }

  console.log(error);
    if (error) {
        return <div className="text-4xl text-center font-bold">{error.message}</div>
}
  return (
    <>
      <SearchBox searchText={searchText} handleChange={handleChange} handleClick={handleClick} users={userData} />
      <div className="flex flex-wrap my-20 p-4 justify-around">
        {filteredData !== null ? (
          filteredData.map(user => <Card key={user.id} {...user} />)
        ) : (
            userData.map(user => <Card key={user.id} {...user} />)
        )}
      </div>
    </>
  );
}

export default Body;
