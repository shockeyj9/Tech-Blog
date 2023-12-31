const router = require('express').Router();
const {Comment} = require('../../models');
const {withAuth} = require('../../utils/auth');

//Create new comment for blog post
router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            Comment: req.body.content,
            User_ID: req.session.user_id,
            Blog_ID: req.body.blogID,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
  });

module.exports = router;