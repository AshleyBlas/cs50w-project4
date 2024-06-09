export const Post = ({ id,user,content,likes,timestamp }) => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('card');
    postDiv.innerHTML = `

    
        <div class="card-body">
            <a href="${userProfileURL.replace('USERNAME', user)}" class="card-title">${user}</a>
            <p class="card-text">${content}</p>
            <p class="card-text">${timestamp}</p>
            <p class="card-text">${likes} likes</p>
            
        </div>
    
    `; 

    return postDiv;
}