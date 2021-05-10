const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });
        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true,
            logged_name: req.session.logged_name,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newpost', withAuth, async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.render('newpost', {
                logged_in: req.session.logged_in
            });
            return;
        }
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});