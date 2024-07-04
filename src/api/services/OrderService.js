import User from "../models/user.js";
import Order from "../models/order.js";

export async function createOrder(request, response) {
    try{
        const {userId, cartItem, totalPrice, shippingAddress, paymentMethod} = request.body;
        const user = await User.findById(new Object(userId));
        console.log("User ---> ", user)
        if (!user || !user.verified) {
            return response.status(401).json(
                {
                    message: !user ? "User doesn't exist" : "Your account has not been verified"
                }
            )
        }
        const products = cartItem.map(
            (item) => ({
                name: item.title,
                quantity: item.quantity,
                price: item.price,
                image: item.image
            })
        )
        const order = new Order({
            user: userId,
            products: products,
            totalPrice: totalPrice,
            shippingAddress: shippingAddress,
            paymentMethod: paymentMethod
        });
        await Order.create(order);
        response
            .status(200)
            .json({
                message: "Order created Successfully"
            })
    } catch (e) {
        console.log("Error creating order ---> ", e)
        response
            .status(500)
            .json({
                message: "Error placing order"
            })
    }
}



export async function getOrders(request, response) {
    try{
        const {userId} = request.params;
        const user = await User.findById(new Object(userId));
        if (!user || !user.verified) {
            return response.status(404).json(
                {
                    message: !user ? "User doesn't exist" : "Your account has not been verified"
                }
            )
        }
        const orders = await Order
            .find({user: userId})
            .populate("user");

        response
            .status(200)
            .json({orders})
    } catch (e) {
        console.log("Error creating order ---> ", e)
        response
            .status(500)
            .json({
                message: "Error getting user's profile"
            })
    }
}





