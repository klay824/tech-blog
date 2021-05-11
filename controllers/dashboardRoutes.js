const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/newpost', withAuth, async (req, res) => {
//     try {
//         if (req.session.logged_in) {
//             res.render('newpost', {
//                 logged_in: req.session.logged_in
//             });
//             return;
//         }
//         res.redirect('/dashboard');
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;