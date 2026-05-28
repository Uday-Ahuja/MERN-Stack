import express, { Router } from 'express';
import User from '../model/user.js';
import {
    handleGetAllUsers,
    getUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
    handleRenderUsersPage} from '../controllers/user.js';
const router = express.Router();

// =======================
// GET ALL USERS & CREATE USER
// =======================
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser)


// =======================
// HTML USERS LIST
// =======================

router.get('/view', handleRenderUsersPage);


// =======================
// GET USER BY ID , UPDATE USER BY ID, DELETE USER 
// =======================
router.route("/:id")
.get(getUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


export default router;