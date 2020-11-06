import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import {bindPromiseCreators} from "redux-saga-routines";
import {fetchTodosAsync} from "../../../store/todos/TodosAction";
import PropTypes from 'prop-types';
import {User} from "../../../constants/Types";


const UserCard = (props) => {
    const {
        user: {name, email, phone, website, id},
        selectedUser,
        onUserSelect,
        fetchTodosAsync
    } = props;

    const classes = useStyles();

    return (
        <Card variant="outlined"
              className={selectedUser === id ? classes.cardSelected : classes.card}
              onClick={() => {
                  onUserSelect(id);
                  fetchTodosAsync(id).then(result => "optionally update local state if needed");
              }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.email} color="textSecondary">
                    {email}
                </Typography>
                <Typography variant="body2" component="p">
                    {phone}
                    <br />
                    {website}
                </Typography>
            </CardContent>
        </Card>
    );
};

UserCard.propTypes = {
    user: User.isRequired,
    selectedUser: PropTypes.number,
    onUserSelect: PropTypes.func,
    fetchTodosAsync: PropTypes.func
};

const useStyles = makeStyles({
    card: {
        backgroundColor: '#f2f8ff'
    },
    cardSelected: {
        backgroundColor: '#9bd0ff'
    },
    email: {
        marginBottom: 12,
    },
});


const mapDispatchToProps = (dispatch) => {
    return {
        ...bindPromiseCreators({
            fetchTodosAsync
        }, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(UserCard);
