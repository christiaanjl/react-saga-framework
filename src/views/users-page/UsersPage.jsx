import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UsersList from "./components/UsersList";
import { fetchUsersAsync } from "../../store/users/UsersAction";
import { bindPromiseCreators } from "redux-saga-routines";
import TodoList from "./components/TodoList";
import PropTypes from "prop-types";

const UsersPage = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props
      .fetchUsersAsync()
      .then((result) => "optionally update local state if needed");
    // eslint-disable-next-line
  }, []);

  return (
    <Container fixed className={classes.root}>
      <UsersList />
      <TodoList />
    </Container>
  );
};

UsersPage.propTypes = {
  fetchUsersAsync: PropTypes.func,
};

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindPromiseCreators(
      {
        fetchUsersAsync,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(UsersPage);
