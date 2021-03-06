import { createMuiTheme } from '@material-ui/core/styles';
import HelveticaFont from './HelveticaFont';
import BauhouseFont from './BauhouseFont';

export default createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#284060',
            },
        },
        MuiPickersDay: {
            day: {
                color: '#284060',
            },
            daySelected: {
                backgroundColor: '#284060',
            },
            dayDisabled: {
                color: '#284060',
            },
            current: {
                color: '#284060',
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#284060',
            },
        },
        MuiCssBaseline: {
            '@global': {
                '@font-face': [HelveticaFont, BauhouseFont],
            },
        },
    },
    breakpoints: {
        values: {
            mobile: 319,
            tablet: 740,
            desktop: 1023,
        },
    },
    palette: {
        primary: {
            main: '#e56100',
            secondary: '#828fa1',
            iconActive: '#fff',
            tableSecondary: '#f3f6f6',
            black: '#010101',
        },
        background: {
            primary: '#fff',
            secondary: '#284060',
            navPrimary: '#3a5374',
        },
    },
    typography: {
        fontFamily: 'Helvetica, Bauhouse',
        fontSize: 14,
        bauhouseFont: 'Bauhouse, Helvetica',
    },
});
