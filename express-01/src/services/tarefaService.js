const Tarefa = require('../models/tarefa');

const criarTarefa = async (dados) => {
  return await Tarefa.create(dados);
};

const listarTarefas = async () => {
  return await Tarefa.findAll();
};

const buscarTarefa = async (objectId) => {
  return await Tarefa.findByPk(objectId);
};

const atualizarTarefa = async (objectId, dados) => {
  const tarefa = await buscarTarefa(objectId);

  if (!tarefa) {
    return null;
  }

  await tarefa.update(dados);

  return tarefa;
};

const excluirTarefa = async (objectId) => {
  const tarefa = await buscarTarefa(objectId);

  if (!tarefa) {
    return null;
  }

  await tarefa.destroy();

  return tarefa;
};

module.exports = {
  criarTarefa,
  listarTarefas,
  buscarTarefa,
  atualizarTarefa,
  excluirTarefa
};