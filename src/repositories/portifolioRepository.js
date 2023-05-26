const {pool} = require('../config/db');

exports.getPortifolio = async () => {
  const result = await pool.query('SELECT * FROM portifolio');
  return result.rows;
}

exports.getPortifolioById = async (id) => {
  const result = await pool.query('SELECT * FROM portifolio WHERE id = $1', [id]);
  return result.rows[0];
}

exports.createPortifolio = async (portifolio) => {
  const result = await pool.query('INSERT INTO portifolio (title, link, image) VALUES ($1, $2, $3) RETURNING *', 
  [portifolio.title, portifolio.link, portifolio.image]);
  return result.rows[0];
}

exports.updatePortifolio = async (id, portifolio) => {
  const result = await pool.query('UPDATE portifolio SET title = $1, link = $2, image = $3 WHERE id = $4 RETURNING *', 
  [portifolio.title, portifolio.link, portifolio.image, id]);
  return result.rows[0];
}

exports.deletePortifolio = async (id) => {
  const result = await pool.query('DELETE FROM portifolio WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
}
