import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "../../components/UI/Grid/Grid";
import Card from "../../components/UI/Card/Card";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Home.module.css";

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userFilters, setUserFilters] = useState([
    {
      name: "name",
      value: "",
      placeholder: "user name",
    },
    {
      name: "age",
      value: "",
      placeholder: "user age",
    },
  ]);

  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://random-persons.herokuapp.com/users")
      .then((res) => {
        setFilteredUsers(res.data.data.slice(0, 10));
        setUsers(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const onUserFiltersChange = (filterName, evt) => {
    const updatedUserFilters = userFilters.map((uf) =>
      uf.name === filterName ? { ...uf, value: evt.target.value } : uf
    );

    setUserFilters(updatedUserFilters);
  };

  const onUserFiltersApplied = () => {
    const updatedFilteredUsers = users.filter((user) =>
      userFilters.every((f) => {
        return (
          f.value === "" ||
          `${user[Object.keys(user).filter((k) => k === f.name)[0]]}`.includes(
            f.value
          )
        );
      })
    );

    setFilteredUsers(updatedFilteredUsers.slice(0, 10));
  };

  const handlePageChange = (pageNumber) => {
    const updatedFilteredUsers = users.slice(
      (activePage - 1) * 10,
      activePage * 10
    );

    setActivePage(pageNumber);
    setFilteredUsers(updatedFilteredUsers);
  };

  const userCards = filteredUsers.map((user) => (
    <Card key={user.name}>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </Card>
  ));

  return (
    <div className={classes.Home}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid
          title="Users List. You can filter it by name and age."
          filterData={userFilters}
          onFilterChange={onUserFiltersChange}
          onFilterApplied={onUserFiltersApplied}
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={users.length}
          pageRangeDisplayed={10}
          handlePageChange={handlePageChange}
        >
          {filteredUsers.length === 0 ? <h3>No Users Found!</h3> : userCards}
        </Grid>
      )}
    </div>
  );
};

export default Home;
