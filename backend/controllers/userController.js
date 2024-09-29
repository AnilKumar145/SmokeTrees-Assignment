const User = require('../models/user');
const Address = require('../models/address');

exports.registerUser = async (req, res) => {
    const { name, address } = req.body;
    try {
      const user = await User.create({ name });
      await Address.create({ address, userId: user.id });
      res.status(201).json({ message: 'Registration successful!' });
    } catch (err) {
      console.error('Error creating user and address:', err);
      res.status(500).json({ error: 'Error registering user and address' });
    }
  };
  