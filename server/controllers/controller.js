module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    get: (req, res) => {
        res.json({"message": "Retrieving"});
    },
    post: (req, res) => {
        res.json({"message": "Added"});
    },
    postDelete: (req, res) => {
        res.json({"message": "Deleted"});
    },
};