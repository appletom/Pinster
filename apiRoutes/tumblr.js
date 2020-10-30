module.exports = (app, fetch) => {

    // -----------------------------------------------------------------------------
    //                                     GET
    // -----------------------------------------------------------------------------
    app.get("/api/tmblrBlogs", async (req, res) => {
        const { tags, blog } = req.body;
        const params = `${blog ? "blog=" + blog : ''}${tags ? "&tags=" + tags : ''}`;
        fetch(`https://api.tumblr.com/v2/tagged?tag=diy&limit=10&api_key=N0uGR0dLh0MPjWi3Hw2HXnn6ZLoJeGZUo84i9iATR9JnoHzhOA`)
        .then(result => result.json())
        .then(data => res.json(data));
    });
};