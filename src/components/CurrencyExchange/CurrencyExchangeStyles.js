import { makeStyles } from '@material-ui/core/styles';
import bg from '../../img/icons/currency exchange/bg.svg';

export default () => {
    return {
        classes: makeStyles(() => ({
            root: {
                width: 310,
                height: 460,
                margin: '0 auto',
                backgroundImage: `url(${bg})`,

                backgroundSize: '100% auto',
            },
            ceilHead: {
                border: 0,
                fontWeight: 'bold',
            },
            ceil: {
                border: 0,
            },
        }))(),
    };
};
