// middleware/admin.js

const admin = (req, res, next) => {
    // Check if user is an admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Unauthorized. Admin access required.' });
    }
    next();
  };
  
  export default admin;
  