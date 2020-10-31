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
        <div class="movie-card">'
        <img src= "${blog.alt_sizes} '"class="img" />'
        <div class="card-body">'
        <h5 class="card-title blogTitle">' ${blog.blog_name} + '</h5>'
        <h6 class="card-subtitle text-muted movieYear"> ' ${blog.tags} + '</h6>'
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