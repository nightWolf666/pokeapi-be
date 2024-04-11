import { Router } from "express";
import {getHighScores,insertNewHighScore} from '../controllers/highscoreController.js';


export const highscoreRouter = Router();


highscoreRouter.route('/').get(getHighScores).post(insertNewHighScore);

