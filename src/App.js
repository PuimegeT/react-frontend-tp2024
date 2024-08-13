import React, { useState, useEffect } from 'react';
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

const articlesData = [
    {
        title: 'De gevolgen van change management',
        description: 'Een structuur die constant veranderdt, werkt dat wel?',
        date: '2021-10-01',
        author: 'J. Doe',
    },
    {
        title: 'Waarom je je gras soms beter niet maait',
        description: 'Je gras kan soms beter wat langer zijn!',
        date: '2021-10-02',
        author: 'J. Doe',
    },
    {
        title: 'De toekomst van AI',
        description: 'Energie kosten gaan omhoog!',
        date: '2021-10-03',
        author: 'JK Rowling',
    },
];

function App() {
    const classes = useStyles();

    // State for search query and filter type
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('Meest recent');
    const [filteredArticles, setFilteredArticles] = useState(articlesData);

    // Effect to filter articles based on search and filter type
    useEffect(() => {
        let filtered = articlesData;

        if (searchQuery) {
            filtered = filtered.filter(article =>
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (filterType === 'Titel') {
            filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        if (filterType === 'Meest recent') {
            filtered = filtered.sort((a, b) => b.date.localeCompare(a.date));
        }

        if (filterType === 'Auteur') {
            filtered = filtered.sort((a, b) => a.author.localeCompare(b.author));
        }


        setFilteredArticles(filtered);
    }, [searchQuery, filterType]);

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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex" justifyContent="flex-end" className={classes.filterButtons}>
                            <Button
                                variant={filterType === 'Meest recent' ? 'contained' : 'outlined'}
                                color="primary"
                                onClick={() => setFilterType('Meest recent')}
                            >
                                Meest recent
                            </Button>
                            <Button
                                variant={filterType === 'Titel' ? 'contained' : 'outlined'}
                                onClick={() => setFilterType('Titel')}
                            >
                                Titel
                            </Button>
                            <Button
                                variant={filterType === 'Auteur' ? 'contained' : 'outlined'}
                                onClick={() => setFilterType('Auteur')}
                            >
                                Auteur
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="column">
                    {filteredArticles.map((article, index) => (
                        <Grid item key={index}>
                            <Article title={article.title} description={article.description} />
                        </Grid>
                    ))}
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
