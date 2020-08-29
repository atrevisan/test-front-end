import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "../../components/UI/Grid/Grid";
import Card from "../../components/UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userFilters, setUserFilters] = useState([
      {
          name: 'userName',
          value: '',
          placeholder: 'user name'
      },
      {
        name: 'userAge',
        value: '',
        placeholder: 'user age'
    }
  ]);

  useEffect(() => {
    axios
      .get("https://random-persons.herokuapp.com/users")
      .then((res) => {
        setFilteredUsers(res.data.data.slice(0, 10));
        setUsers(res.data.data.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onUserFiltersChange = (filterName, evt) => {
      const updatedUserFilters = userFilters.map(uf =>(
        uf.name === filterName ?
            {...uf, value: evt.target.value} :
            uf
      ));

      setUserFilters(updatedUserFilters);
  }

  const onUserFiltersApplied = () => {
      const updatedFilteredUsers = users.filter(user => (
        userFilters.every(f => (
            f.value === '' || 
            user[Object.keys(user).filter(k => k === f.name)[0]] === f.value
        ))
      ));

      setFilteredUsers(updatedFilteredUsers);
  }

  const userCards = filteredUsers.map((user) => (
    <Card key={user.name}>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </Card>
  ));

  return (
    <div className={classes.Home}>
      <Grid
        title="Users List. You can filter it by name and age."
        filterData={userFilters}
        onFilterChange={onUserFiltersChange}
        onFilterApplied={onUserFiltersApplied}
      >
          {userCards}
      </Grid>
    </div>
  );
};

export default Home;
