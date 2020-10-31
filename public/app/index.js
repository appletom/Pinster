//console.log('Hello world');
async function getBlogs(){
    return fetch('./api/tmblrBlogs')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            $('.results').html(renderBlogs(data))
        })
}

function renderBlogs(blogArray){
    
    console.log(blogArray);
    var blogHTML = blogArray.response.map(function (blog) {
        return `
        <div class="pinster-card">
        <img class="card-img-top" src="${blog.photos[0].original_size.url}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title blogTitle"> ${blog.blog_name}</h5>
        <h6 class="card-subtitle text-muted tagged"> ${blog.tags}</h6>
        </div>
        </div>
        `
    }).join('');
    return blogHTML;
}
getBlogs();


// add new project to home page
let addNewProject = document.getElementByClass('add-new-project');
let newProject = document.getElementById('newProject');
addNewProject.onclick = function () {
    newProject.style.display = "block";
}