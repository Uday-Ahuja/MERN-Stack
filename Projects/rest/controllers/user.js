import User from '../models/user.js';
export async function handleGetAllUsers(req,res){
    const allUsers = await User.find({});
    return res.status(200).json(allUsers);
}
export async function getUserById(req,res){
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({
            status: 'failed',
            message: 'User not found'
        });
    }
    return res.status(200).json(user);
}
export async function handleUpdateUserById(req,res){
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!updatedUser) {
        return res.status(404).json({
            status: 'failed',
            message: 'User not found'
        });
    }
    return res.status(200).json({
        status: 'success',
        user: updatedUser
    });
}

export async function handleDeleteUserById(req,res){
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
        return res.status(404).json({
            status: 'failed',
            message: 'User not found'
        });
    }
    return res.status(200).json({
        status: 'success',
        message: 'User deleted successfully'
    });
}
export async function handleCreateNewUser(req,res){
    const body = req.body;
    if (
        !body.firstName ||
        !body.lastName ||
        !body.email
    ) {
        return res.status(400).json({
            status: 'failed',
            message: 'Missing required fields'
        });
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        gender: body.gender,
        email: body.email,
        jobTitle: body.jobTitle
    });
    console.log(result);
    return res.status(201).json({
        msg: 'Success'
    });
}
export async function handleRenderUsersPage(req, res) {

    const allDBUsers = await User.find({});

    const html = `
    <ul>
        ${allDBUsers
            .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
            .join("")}
    </ul>
    `;

    return res.status(200).send(html);
}