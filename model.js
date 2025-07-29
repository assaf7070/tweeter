

class Tweeter {
    constructor() {
        this._posts = [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ];
        this._postIdCounter = 2;
        this._commentIdCounter = 6;
    }

    getPosts() {
        return this._posts;
    }

    addPost(text) {
        this._posts.push({
            text,
            id: `p${++this._postIdCounter}`,
            comments: []
        });
    }

    removePost(postID) {
        const index = this._findPostIndex(postID);
        if (index !== -1) {
            this._posts.splice(index, 1);
        }
    }

    addComment(postID, text) {
        const index = this._findPostIndex(postID);
        if (index !== -1) {
            this._posts[index].comments.push({
                id: `c${++this._commentIdCounter}`,
                text
            });
        }
    }

    removeComment(postID, commentID) {
        const index = this._findPostIndex(postID);
        if (index !== -1) {
            const commentIndex = this._posts[index].comments.findIndex(c => c.id === commentID);
            if (commentIndex !== -1) {
                this._posts[index].comments.splice(commentIndex, 1);
            }
        }
    }

    _findPostIndex(postID) {
        return this._posts.findIndex(post => post.id === postID);
    }
}


// const tweeter = new Tweeter();

// // Test adding a post
// tweeter.addPost("This is my own post!");
// console.log(tweeter.getPosts());
// // Should add: {text: "This is my own post!", id: "p3", comments: []}

// // Test removing a post
// tweeter.removePost("p1");
// console.log(tweeter.getPosts());
// // Should only have two posts left

// // Test adding comments
// tweeter.addComment("p3", "Damn straight it is!");
// tweeter.addComment("p2", "Second the best!");
// console.log(tweeter.getPosts());

// // Test removing comments
// tweeter.removeComment("p2", "c6");
// console.log(tweeter.getPosts());

