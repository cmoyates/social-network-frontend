import React from 'react'
import {useParams, Redirect} from "react-router-dom";
import {useState, useEffect} from 'react';
import PostCard from '../components/PostCard';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import SubmitCommentDialog from '../components/SubmitCommentDilog';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

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

const ProfilePage = (props) => {

    const classes = useStyles();

    let { id } = useParams();

    const [pageProfile, setPageProfile] = useState(null);
    const [posts, setPosts] = useState([]);
    const [commentDialogOpen, setCommentDialogOpen] = useState(false);
    const [commentingPost, setCommentingPost] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [following, setFollowing] = useState(false);

    const fetchPageProfile = async () => {
        try {
            setPageProfile(null);
            const res = await fetch('https://fast-coast-04774.herokuapp.com/profiles/' + id);
            const data = await res.json();
            document.title = "Social Network"

            console.log(data);
            setPageProfile(data);
            await fetchPageProfilePosts();
        } catch (error) {
            setPageProfile(-1);
        }
    }

    const fetchPageProfilePosts = async () => {
        const res = await fetch('https://fast-coast-04774.herokuapp.com/posts/user/' + id);
        const data = await res.json();

        console.log(data);
        setPosts(data);
    }

    const handleSubmitComment = async (comment) => {
        setCommentDialogOpen(false);
        commentingPost.comments.commentList.push(comment);
        const newPost = await fetch("https://fast-coast-04774.herokuapp.com/posts/" + commentingPost.post_id, {
        method: "PUT",
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(commentingPost)
        });
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setSnackbarOpen(false);
    };

    useEffect( () => {
        fetchPageProfile();
    }, [id])

    if (!pageProfile) {
        return null;
    }
    else if (pageProfile === -1) {
        return (<Redirect to={
            {
                pathname: '/404',
                state: {
                    from: props.location
                }

            }
        }/>)
    }
    else {
        return (
            <div>
                <h1>{pageProfile.user_name} <Button variant="outlined" onClick={()=>{setFollowing(!following)}}>{(following) ? "Following" : "Follow"}</Button></h1>
                
                <Container maxWidth="sm">
                    {posts.map((item) => (<PostCard key={item.post_id} post={item} viewer_ID={props.profile.profile_id} setSnackbarOpen={setSnackbarOpen} commentCallback={() => {
                        setCommentingPost(item);
                        setCommentDialogOpen(true);
                    }}/>))}
                </Container>
                <SubmitCommentDialog open={commentDialogOpen} handleClose={() => {setCommentDialogOpen(false);}} handleSubmit={handleSubmitComment} profile={props.profile} post={commentingPost}/>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                    message="Link copied to clipboard"
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </div>
        )
    }
}

export default ProfilePage