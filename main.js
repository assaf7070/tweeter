const tweeter = new Tweeter();
const renderer = new Renderer();

renderer.renderPosts(tweeter.getPosts());

// Add new post
$('#twit-btn').on('click', function () {
    const input = $('#post-input');
    const text = input.val().trim();
    if (text) {
        tweeter.addPost(text);
        input.val('');
        renderer.renderPosts(tweeter.getPosts());
    }
});

// Delete post
$('#posts').on('click', '.delete', function () {
    const postID = $(this).closest('.post').data('id');
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts());
});

// Add comment
$('#posts').on('click', '.comment-button', function () {
    const $postDiv = $(this).closest('.post');
    const postID = $postDiv.data('id');
    const commentText = $postDiv.find('.comment-input').val().trim();
    if (commentText) {
        tweeter.addComment(postID, commentText);
        renderer.renderPosts(tweeter.getPosts());
    }
});

// Delete comment
$('#posts').on('click', '.delete-comment', function () {
    const $comment = $(this).prev('.comment');
    const commentID = $comment.data('id');
    const postID = $(this).closest('.post').data('id');
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts());
});
