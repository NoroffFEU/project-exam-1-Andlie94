const token = localStorage.getItem("token");

import { allBlogPostfetch } from "../api_calls/api_fetch.js";

async function displayOstlandetBlogPosts() {
    try {
        const posts = await allBlogPostfetch();
        
        const ostlandetContainer = document.getElementById("Ostlandet-container");
        ostlandetContainer.innerHTML = "";  

    
        const postsToDisplay = posts.data.slice(0, 3);

        postsToDisplay.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            postElement.innerHTML = `
                <img src="${post.media.url}" alt="${post.media.alt}">
                <h3>${post.title}</h3>
                <p>${post.body.split('.')[0]}</p>
                <p><small>Author: ${post.author.name}</small></p>
            `;

            postElement.addEventListener('click', () => {
                window.location.href = `blogpost.html?id=${post.id}`; 
            });

            ostlandetContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error("Det oppstod en feil ved henting av blogginnlegg for Ostlandet:", error);
    }
}

async function displayBlogPosts() {
    try {
        const posts = await allBlogPostfetch();
        
        const blogContainer = document.getElementById("data-container");
        blogContainer.innerHTML = ""; 

        posts.data.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");


            postElement.innerHTML = `
                <img src="${post.media.url}" alt="${post.media.alt}">
                <h3>${post.title}</h3>
                <p>${post.body.split('.')[0]}</p>
                <p><small>Author: ${post.author.name}</small></p>
            `;

            postElement.addEventListener('click', () => {
                window.location.href = `blogpost.html?id=${post.id}`; 
            });

            blogContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error("Det oppstod en feil ved henting av blogginnlegg:", error);
    }
}


function popuptext(){
    document.getElementById("stifinnetenmaskottext")
    display = "block"
}


displayOstlandetBlogPosts();
displayBlogPosts();