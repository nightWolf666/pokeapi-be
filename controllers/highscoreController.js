
import { pool } from '../db.js';

export async function insertNewHighScore(req, res) {
  const { player, score } = req.body;
  console.log(req.body)
  try {
      const { rows: highscore } = await pool.query(
          'INSERT INTO highscore (player, score) VALUES ($1, $2) RETURNING *',
          [player, score]
      );
      res.json(highscore);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
}

export async function getHighScores(req, res) {
  try {
      const { rows: highscore } = await pool.query('SELECT * FROM highscore ');
      console.log("hi users", highscore);
      res.send(highscore);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
}