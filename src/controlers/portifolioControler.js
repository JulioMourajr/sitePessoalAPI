const portifolioRepository = require('../repositories/portifolioRepository');


exports.getPortifolio = async (req, res) => {
  const portifolio = await portifolioRepository.getPortifolio();
  return res.json(portifolio);
}

exports.getPortifolioById = async (req, res) => {
  const id = parseInt(req.params.id);
  const portifolio = await portifolioRepository.getPortifolioById(id);
  return res.json(portifolio);
}

exports.createPortifolio = async (req, res) => {
  const portifolio = req.body;
  const newPortifolio = await portifolioRepository.createPortifolio(portifolio);
  return res.json(newPortifolio);
}

exports.updatePortifolio = async (req, res) => {
  const id = parseInt(req.params.id);
  const portifolio = req.body;
  const updatedPortifolio = await portifolioRepository.updatePortifolio(id, portifolio);
  return res.json(updatedPortifolio);
}

exports.deletePortifolio = async (req, res) => {
  const id = parseInt(req.params.id);
  await portifolioRepository.deletePortifolio(id);
  return res.json({message: `Projeto ${id} deletado com sucesso`});
}