import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: []
};

function PostList(props) {
    const { posts } = props
    return (
        <ul className="postList">
            {posts.map((post, index) => (
                <li key={index}>{post.title}</li>
            ))}
        </ul>
    );
};

export default PostList;