
const experienciasRepository = require('../repositories/experienciaRepository');

exports.getAllExperiencias = async (req, res) => {
  const tipo = req.query.tipo;
  const experiencias = await experienciasRepository.getAllExperiencias(tipo);
  res.json(experiencias);
};

exports.getExperienciaById = async (req, res) => {
  const  id  = parseInt(req.params.id);
  const experiencia = await experienciasRepository.getExperienciaById(id);
  res.json(experiencia);
}

exports.createExperiencia = async (req, res) => {
  const experiencia = req.body
  const newExperiencia = await experienciasRepository.createExperiencia(experiencia);
  res.json(newExperiencia);
}

exports.updateExperiencia = async (req, res) => {
  const id = parseInt(req.params.id);
  const experiencia = await experienciasRepository.updateExperiencia(id, req.body);
  res.json(experiencia);
}

exports.deleteExperiencia = async (req, res) => {
  const id = parseInt(req.params.id);
  const experiencia = await experienciasRepository.deleteExperiencia(id);
  res.json(experiencia);
}