/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { ReactSVG } from 'react-svg';

import useStyles from './HeaderStyles';
import logo from '../../img/icons/logo.svg';
import logout from '../../img/icons/logout-2/logout.svg';

export default function Header({ user, authenticated, onLogOut }) {
    const { classes, isNotMobile } = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.headerWrap}>
                    <IconButton
                        edge="start"
                        fontSize="large"
                        className={(classes.menuButton, classes.buttonWallet)}
                    >
                        <ReactSVG src={logo} className={classes.logo} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Wallet
                    </Typography>
                    <Typography
                        email={user.email}
                        variant="h6"
                        className={(classes.menuButton, classes.name)}
                    >
                        {user.name}
                    </Typography>
                    {isNotMobile && <Divider orientation="vertical" flexItem />}

                    <IconButton edge="start" className={classes.icon}>
                        <ReactSVG src={logout} className={classes.logout} />
                    </IconButton>
                    {isNotMobile && (
                        <Button
                            color="grey"
                            className={classes.LogOut}
                            onClick={onLogOut}
                            alt=" Logout"
                        >
                            Выйти
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.defaultProps = {
    user: PropTypes.shape({
        name: 'name',
        email: 'email',
    }),
};

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    authenticated: PropTypes.bool.isRequired,
    onLogOut: PropTypes.func.isRequired,
};
