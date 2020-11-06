import React from "react";
import Paper from "@material-ui/core/Paper";
import TodoCard from "./TodoCard";
import { connect } from "react-redux";
import { values } from "lodash";
import Status from "../../../constants/Status";
import Header from "../../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import ProgressSpinner from "../../components/ProgressSpinner";
import PropTypes from "prop-types";
import { Todo } from "../../../constants/Types";
import { todosSelector } from "../../../selectors/todosSelector";

const TodoList = ({ todos, status }) => {
  const classes = useStyles();

  if (status === Status.BUSY) {
    return <ProgressSpinner />;
  } else if (status === Status.SUCCESS) {
    return (
      <Paper elevation={3} className={classes.root}>
        <Header title="To do" />
        {todos.map((todo) => {
          return <TodoCard todo={todo} key={todo.id} />;
        })}
      </Paper>
    );
  } else {
    return <div />;
  }
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(Todo).isRequired,
  status: PropTypes.oneOf(values(Status)).isRequired,
};

const useStyles = makeStyles({
  root: {
    maxHeight: 800,
    width: 300,
    overflow: "auto",
  },
});

const mapStateToProps = (state) => {
  return {
    todos: todosSelector(state),
    status: state.todos.status,
  };
};

export default connect(mapStateToProps)(TodoList);
