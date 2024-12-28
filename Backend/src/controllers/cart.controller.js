import userModel from "../models/user.model.js";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    // Find the user by ID
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || {}; // Ensure cartData exists

    if (cartData[itemId]) {
      // Item already in cart, update the quantity
      cartData[itemId].quantity += quantity; // Add quantity instead of replacing it
    } else {
      // Item is not in the cart, add it with the provided quantity
      cartData[itemId] = { quantity }; // Start with the provided quantity
    }

    // Update the user's cartData in the database
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    // Find the user by ID
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || {}; // Ensure cartData exists

    if (cartData[itemId]) {
      // Update the quantity of the item in the cart
      cartData[itemId].quantity = quantity; // Directly update the quantity
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Update the user's cartData in the database
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.status(200).json({ message: "Cart updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    // Find the user by ID
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const cartData = userData.cartData || {}; // Ensure cartData exists
    res.status(200).json({ cartData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export { addToCart, updateCart, getCart };
