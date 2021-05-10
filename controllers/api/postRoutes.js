const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.redirect('/dashboard');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy(
      {
        ...req.body,
        user_id: req.session.user_id
      },
      {
        where: {
          id: req.params.id
        }
      });
    res.status(200).json(postData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
