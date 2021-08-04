import React from 'react'
import PostCard from "../components/PostCard.js";
import SubmitPostDialog from '../components/SubmitPostDialog';
import { GoogleLogout } from 'react-google-login';
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import MenuList from '@material-ui/core/MenuList';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {useState, useEffect, useRef} from 'react';
import ColorPicker from '../components/ColorPicker.js';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const Posts = (props) => {

    const [posts, setPosts] = useState([]);
    const [primaryColor, setPrimaryColor] = useState('#3f50b5');
    const [postDialogOpen, setPostDialogOpen] = useState(false);
    const [colorDialogOpen, setColorDialogOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleSubmitPost = async (post) => {
        setPostDialogOpen(false);
        console.log(post)
        const newPost = await fetch("https://fast-coast-04774.herokuapp.com/posts", {
        method: "POST",
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(post)
        });
        console.log(newPost);
        await fetchPosts();
    };

    const handleSubmitColor = async (color) => {
        setColorDialogOpen(false);
        setPrimaryColor(color);
        //console.log(color);
    }

    const fetchPosts = async () => {
        const res = await fetch('https://fast-coast-04774.herokuapp.com/posts');
        const data = await res.json();
        document.title = "Social Network"

        console.log(data);
        setPosts(data);
    }
    useEffect(() => {
        if (props.isAuth) {
            fetchPosts();
            console.log("Profile ID");
            console.log(props.profile.profile_id);
            setPrimaryColor(props.profile.primary_color)
        }
    }, [props.isAuth, props.profile.primary_color])

    const classes = useStyles();
    
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setMenuOpen(false);
    };
    
    const logout = () => {
        console.log("Logout Successful");
        props.setProfile([]);
        props.setIsAuth(false);
    }

    var theme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: primaryColor,
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">
                        Social Network
                    </Typography>
                    <div className={classes.title}/>
                    <Typography>
                        {props.profile.user_name}
                    </Typography>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {setMenuOpen(!menuOpen)}} ref={anchorRef} 
                        aria-controls={menuOpen ? 'menu-list-grow' : undefined} aria-haspopup="true">
                        <Avatar src={props.profile.img_url}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <br />
            <Button variant="contained" color="primary" size={"medium"} onClick={() => {setPostDialogOpen(true);}}><b>Post</b></Button>
            <Container maxWidth="sm">
                {posts.map((item) => (<PostCard key={item.post_id} post={item} viewer_ID={props.profile.profile_id}/>))}
            </Container>
            <SubmitPostDialog open={postDialogOpen} handleClose={() => {setPostDialogOpen(false);}} handleSubmit={handleSubmitPost} profile={props.profile}/>
            <ColorPicker open={colorDialogOpen} handleClose={() => {setColorDialogOpen(false);}} handleSubmit={handleSubmitColor}/>
            <Popper open={menuOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={menuOpen} id="menu-list-grow">
                            <GoogleLogout
                                clientId="399415598384-sgkom02f57l549gtnn877013fg004ke5.apps.googleusercontent.com"
                                render={renderProps => (
                                    <MenuItem onClick={renderProps.onClick}  disabled={renderProps.disabled}>
                                        Logout
                                    </MenuItem>
                                )}
                                buttonText="Logout"
                                onLogoutSuccess={logout}
                            >
                            </GoogleLogout>
                            <MenuItem onClick={() => {setMenuOpen(false); setColorDialogOpen(true);}}>
                                Select Accent Color
                            </MenuItem>
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
            </Popper>
        </ThemeProvider>
    )
}

export default Posts
