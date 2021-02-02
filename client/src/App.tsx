import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import NotFoundPage from './pages/NotFoundPage';
import { Container, CssBaseline } from '@material-ui/core';

import TopBar from './components/TopBar';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#000',
        },
    },
    typography: {
        h1: {
            fontSize: '2rem',
        },
        h2: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                width: '100%',
            },
        },
        MuiFormControl: {
            root: {
                width: '100%',
                marginBottom: '1rem',
            },
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <TopBar />
                <Container maxWidth="sm">
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/join" component={JoinPage} />
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
