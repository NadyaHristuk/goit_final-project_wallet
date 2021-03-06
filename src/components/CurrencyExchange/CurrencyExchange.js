/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from './CurrencyExchangeStyles';
import Paper from '@material-ui/core/Paper';

export default function CurrencyExchange({ currencies, rowCount }) {
    const { classes, isLaptop } = useStyles(rowCount);

    return (
        <TableContainer className={classes.root}>
            {isLaptop && <Paper elevation={5} />}
            <Table aria-label="currency table">
                <TableHead className={classes.head}>
                    <TableRow>
                        <TableCell align="center" className={classes.ceilHead}>
                            Валюта
                        </TableCell>
                        <TableCell align="center" className={classes.ceilHead}>
                            Покупка
                        </TableCell>
                        <TableCell align="center" className={classes.ceilHead}>
                            Продажа
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currencies &&
                        Object.keys(currencies).map(currency => (
                            <TableRow key={currency}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                    className={classes.ceil}
                                >
                                    {currency}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    className={classes.ceil}
                                >
                                    {currencies[currency].buy}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    className={classes.ceil}
                                >
                                    {currencies[currency].sale}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
