import User from "../models/user.js";
import Order from "../models/order.js";

export async function userProfile(request, response) {
    try{
        const {userId} = request.params;
        const user = await User.findById(userId);
        if (!user || !user.verified) {
            return response.status(404).json(
                {
                    message: !user ? "User doesn't exist" : "Your account has not been verified"
                }
            )
        }
        response
            .status(200)
            .json({user})
    } catch (e) {
        console.log("Error creating order ---> ", e)
        response
            .status(500)
            .json({
                message: "Error getting user's profile"
            })
    }
}






