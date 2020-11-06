import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IconButton from '@material-ui/core/IconButton';
import {connect} from "react-redux";
import {toggleCompleted} from "../../../store/todos/TodosAction";
import {Todo} from "../../../constants/Types";


const TodoCard = (props) => {
    const classes = useStyles();
    const {todo: {id, completed}} = props;

    return (
        <div className={classes.root}>
            <IconButton onClick={() => props.toggleCompleted({id, completed: !completed})}
                        disableRipple
                        className={classes.button}>
                { props.todo.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon /> }
            </IconButton>
            {
                <div style={{padding: 5}} >
                    { props.todo.title }
                </div>
            }
        </div>
    );
};

TodoCard.propTypes = {
    todo: Todo.isRequired
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
});

export default connect(null, {toggleCompleted})(TodoCard);
