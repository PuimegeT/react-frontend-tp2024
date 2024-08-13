import React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    InputBase,
    Paper,
    Typography,
    Grid,
    Pagination,
    createTheme, Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import { makeStyles, ThemeProvider } from '@mui/styles';

const theme = createTheme();

const useStyles = makeStyles(() => ({
    appBar: {
        marginBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '24px',
        fontWeight: 'bold',
    },
    toolbarButtons: {
        marginLeft: theme.spacing(2),
    },
    searchBar: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginBottom: theme.spacing(2),
    },
    searchInput: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    filterButtons: {
        marginBottom: theme.spacing(2),
    },
    article: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
}));

function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" className={classes.appBar} color="default">
                <Toolbar>
                    <Typography className={classes.title}>
                        Ciferica
                    </Typography>
                    <div className={classes.toolbarButtons}>
                        <Button>Prijzen</Button>
                        <Button>Account aanvragen</Button>
                        <Button>Over</Button>
                        <Button>Bibliotheek</Button>
                        <Button>Contact</Button>
                        <Button>Sign in</Button>
                        <Button variant="outlined">Request</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Box sx={{ paddingY: 2 }}>
                <Grid container direction="row" maxWidth="100%">
                    <Grid item xs={6}>
                        <Paper component="form" className={classes.searchBar}>
                            <InputBase
                                className={classes.searchInput}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex" justifyContent="flex-end" className={classes.filterButtons}>
                            <Button variant="contained" color="primary">Meest recent</Button>
                            <Button variant="outlined">Titel</Button>
                            <Button variant="outlined">Auteur</Button>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="column">
                    <Grid>
                        <Article
                            title="De gevolgen van change management"
                            description="Een structuur die constant veranderdt, werkt dat wel?"
                        />
                    </Grid>
                    <Grid>
                        <Article
                            title="Waarom je je gras soms beter niet maait"
                            description="Je gras kan soms beter wat langer zijn!"
                        />
                    </Grid>
                    <Grid>
                        <Article
                            title="De toekomst van AI"
                            description="Energie kosten gaan omhoog!"
                        />
                    </Grid>
                </Grid>
                <Pagination className={classes.pagination} count={99} variant="outlined" shape="rounded" />
            </Box>
        </ThemeProvider>
    );
}

function Article({ title, description }) {
    const classes = useStyles();

    return (
        <Paper className={classes.article}>
            <div>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="textSecondary">{description}</Typography>
                <Button color="primary">Lees dit artikel</Button>
            </div>
            <div>
                <IconButton>
                    <EditIcon />
                </IconButton>
                <IconButton>
                    <DownloadIcon />
                </IconButton>
            </div>
        </Paper>
    );
}

export default App;
