import React, {useState} from "react";
import UserCard from "./UserCard";
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {User} from "../../../constants/Types";
import PropTypes from 'prop-types';
import {usersSelector} from "../../../selectors/usersSelector";


const UsersList = ({users}) => {
    const classes = useStyles();
    const [selectedUser, setSelectedUser] = useState(undefined);

    return (
        <Paper elevation={3} className={classes.root}>
            {
                users.map(user => {
                    return (
                        <UserCard
                            user={user}
                            selectedUser={selectedUser}
                            onUserSelect={id => setSelectedUser(id)}
                            key={user.id}/>
                    );
                })
            }
        </Paper>
    );
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(User).isRequired
};

const useStyles = makeStyles({
    root: {
        maxHeight: 800,
        width: 300,
        overflow: 'auto',
        scrollbarWidth: 'none',     // hide scroll bar - Firefox
        msOverflowStyle: 'none',    // hide scroll bar - IE, Edge
        '&::-webkit-scrollbar': {   // hide scroll bar - Chrome, Safari and Opera
            display: 'none'
        }
    },
});

const mapStateToProps = (state) => {
    return {
        users: usersSelector(state)
    };
};

export default connect(mapStateToProps)(UsersList)
