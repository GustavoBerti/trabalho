import express from 'express';
import UserController from './Controller/UserController';
import TaskController from './Controller/TaskController';
import CategoryController from './Controller/CategoryController';

const router = express.Router();

router.post('/users', UserController.create);
router.post('/tasks', TaskController.create);
router.post('/categories', CategoryController.create);

export default router;
