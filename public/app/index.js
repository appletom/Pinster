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
        <div class="card">
        <img class="card-img-top" src="${blog.photos[0].original_size.url}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title blogTitle"> ${blog.blog_name}</h5>
        <a href="${blog.post_url}"> ${blog.blog.description}</a>
        <h6 class="card-subtitle text-muted tagged"> ${blog.tags}</h6>
        <hr>
        <div class="row">
        <div class="col col-sm-10 col-md-10">
        <div class="form-group">
        <input type="text" name="comment" class="form-control rounded-0" value="Enter comment...">
        </div>
        </div>
        <div class="col col-sm-2 col-md-2">
        <button class="btn btn-warning rounded-0">Submit</button>
        </div>
        </div>
        <br>
     
        </div>
        </div>
        `
    }).join('');
    return blogHTML;
}
getBlogs();

// create new post on pop up form
function createPost() {
  document.getElementById("blogpost").style.display = "block";
}

createPost();

