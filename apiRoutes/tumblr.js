module.exports = (router, fetch) => {

    // -----------------------------------------------------------------------------
    //                                     GET
    // -----------------------------------------------------------------------------
    router.get("/api/tmblrBlogs", async (req, res) => {
        const { tags, blog } = req.body;
        const params = `${blog ? "blog=" + blog : ''}${tags ? "&tags=" + tags : ''}`;
        fetch(`https://api.tumblr.com/v2/tagged?api_key=N0uGR0dLh0MPjWi3Hw2HXnn6ZLoJeGZUo84i9iATR9JnoHzhOA&tag=diy%20crochet`)
        .then(result => result.json())
        .then(data => res.json(data));
    });
};

setTimeout (function(){}, 5000)