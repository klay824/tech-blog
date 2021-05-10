const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.session.post_id
        });
        // goes back to previous page user came from
        backURL = req.header('Referer') || '/';
        res.redirect(backURL);
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
})