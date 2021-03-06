import { makeStyles, useTheme } from '@material-ui/core/styles';

export default () => {
    consty theme = useTheme()
    return {
        classes: makeStyles(() => ({
            registerFormContainer: {
                paddingBottom: 50,
                marginTop: 50,
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            },
            headingMobileTabletStyles: {
                display: 'flex',
                flexDirection: 'raw',
                justifyContent: 'center',
                alignItems: 'center',
            },
            headerMobileStyle: {
                color: 'rgb(44, 44, 44)',
                fontSize: '24px',
                lineHeight: '1.25',
                marginLeft: '8px',
            },
            registerForm: {
                width: 250,
                height: 242,
                marginBottom: 20,
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `space-between`,
                alignItems: `center`,
                fontFamily: `Arial, Helvetica, sansSerif`,
            },
            link: {
                textDecoration: 'none',
                color: theme.palette.primary.black,
            }
        }))(),
    };
};
