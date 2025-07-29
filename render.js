class Renderer {
    renderPosts(posts) {
        $('#posts').empty();

        for (let post of posts) {
            const $postDiv = $('<div>').addClass('post').attr('data-id', post.id);
            const $postText = $('<div>').addClass('post-text').text(post.text);
            const $deleteBtn = $('<div>').addClass('delete').attr('data-id', post.id).text('Delete Post');

            const $commentsDiv = $('<div>').addClass('comments');
            for (let comment of post.comments) {
                const $comment = $('<div>').addClass('comment').attr('data-id', comment.id).text(comment.text);
                const $deleteComment = $('<div>').addClass('delete-comment').attr('data-id', comment.id).text('X');
                $commentsDiv.append($comment, $deleteComment);
            }

            const $commentInput = $('<input>').addClass('comment-input').attr('placeholder', 'Got something to say?');
            const $commentBtn = $('<button>').addClass('comment-button').text('Comment');

            $postDiv.append($postText, $deleteBtn, $commentsDiv, $commentInput, $commentBtn);
            $('#posts').append($postDiv);
        }
    }
}
