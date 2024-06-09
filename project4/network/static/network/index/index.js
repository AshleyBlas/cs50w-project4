import { Post } from "./components/Post.js";

document.addEventListener('DOMContentLoaded', async() => {
    const feedDiv = document.querySelector('#feed');
    feedDiv.innerHTML = '';

    const response = await fetch('api/posts');
    
    const data = await response.json()

    data.forEach(post => {
        const postDiv = Post(post);
        feedDiv.append(postDiv);
    });

});