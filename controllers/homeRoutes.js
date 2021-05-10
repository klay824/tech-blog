const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User]
        });

        const posts = postData.map(post => post.get({ plain: true }));

        res.render('homepage', { posts });
    } catch (err) {
            console.log('ERROR: ', err);
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
try {
    const postData = await Post.findByPk(req.params.id, {
        include: [
        {
            model: User,
            attributes: ['username'],
        },
        ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
        ...post,
        logged_in: req.session.logged_in
    });
    } catch (err) {
    res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {

});

// router.get('/logout', async (req, res) => {

// });

router.get('/signup', async (req, res) => {

});

module.exports = router;