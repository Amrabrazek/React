import { connect } from 'react-redux';
import React from 'react';
import { fetchPost } from './postsActions';

const Post = ({ post, fetchPost }) => {
return (
<div>
    <h1>Post</h1>
    <div>{post.title}</div>
    <button onClick={()=>fetchPost("previous")}>previous</button>
    <button onClick={()=>fetchPost("next")}>Next</button>
</div>
);
};

const mapStateToProps = (state) => ({
    post : state.post.data,
});

const mapDispatchToProps = {
    fetchPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);