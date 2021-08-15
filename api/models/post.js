const db = require ('../dbConfig')

class Post {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.message = data.message
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(d => new Post(d))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }

    static create(name, email, message){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts (name, email, message) VALUES ($1, $2, $3) RETURNING *;`, [ name, email, message ]);
                let newPost = new Post(postData.rows[0]);
                resolve (newPost);
            } catch (err) {
                reject('Error creating Post');
            }
        });
    }



}

module.exports = Post;