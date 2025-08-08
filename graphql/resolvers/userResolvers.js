// resolvers/user.resolvers.js
const bcrypt = require("bcryptjs");
const User = require("../../db/models/userModel");

const userResolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (_, { id }) => {
      return await User.findById(id);
    },
  },

  Mutation: {
    registerUser: async (_, { input }) => {
      const { username, email, password, phone, role } = input;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User with this email already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        username,
        email,
        password: hashedPassword,
        phone,
        role,
      });

      await user.save();

      return {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role: user.role,
      };
    },

    loginUser: async (_, { input }) => {
      const { email, password } = input;

      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        throw new Error("Invalid email or password");
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Invalid email or password");
      }

      return {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role: user.role,
      };
    },

    updateUser: async (_, { id, input }) => {
      const updatedUser = await User.findByIdAndUpdate(id, input, {
        new: true,
      });

      if (!updatedUser) throw new Error("User not found");
      return updatedUser;
    },

    deleteUser: async (_, { id }) => {
      const deleted = await User.findByIdAndDelete(id);
      if (!deleted) throw new Error("User not found");
      return "User deleted successfully";
    },
  },
};

module.exports = userResolvers;
