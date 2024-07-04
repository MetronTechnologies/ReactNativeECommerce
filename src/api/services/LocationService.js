import User from "../models/user.js";

export async function updateUserAddress(request, response) {
    try{
        const { userId } = request.params;
        const { address } = request.body;
         const user = await User.findById({id: userId}).exec();
         if(!user){
             response
                 .status(404)
                 .json({
                     message: 'User not found'
                 })
         }

         const newAddress = {
             name: address.name,
             mobileNo: address.mobileNo,
             houseNo: address.houseNo,
             street: address.street,
             landmark: address.landmark,
             city: address.city,
             country: address.country,
             postalCode: address.postalCode,
         }
         user.addresses.push(newAddress);
         await User.findOneAndUpdate(
             {id: userId},
             user, {
                 upsert: true
             }
         );
        response
            .status(200)
            .json({
                message: 'Address successfully updated'
            })
    } catch (e) {
        console.log("Error updating user address ", e)
        response
            .status(500)
            .json({
                message: 'Error adding address'
            })
    }
}



export const getUserAddresses = async (request, response) => {
    try{
        const { userId } = request.params.userId;
        const user = await User.findById({id: userId}).exec();
        if(!user){
            response
                .status(404)
                .json({
                    message: 'User not found'
                })
        }
        const userAddress = user.addresses;
        response
            .status(200)
            .json({userAddress})
    } catch (e) {
        console.log("Error getting user addresses ", e)
        response
            .status(500)
            .json({
                message: 'Error adding address'
            })
    }
}