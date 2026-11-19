const tarefaService = require('../services/tarefaService');

const {
  criarTarefaSchema,
  atualizarTarefaSchema,
  uuidSchema
} = require('../models/tarefaSchema');

const criarTarefa = async (req, res) => {
  try {
    const validacao = criarTarefaSchema.safeParse(req.body);

    if (!validacao.success) {
      return res.status(400).json({
        erro: validacao.error.issues
      });
    }

    const tarefa = await tarefaService.criarTarefa(validacao.data);

    return res.status(201).json(tarefa);

  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao criar tarefa' });
  }
};

const listarTarefas = async (req, res) => {
  try {
    const tarefas = await tarefaService.listarTarefas();

    return res.status(200).json(tarefas);

  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao listar tarefas' });
  }
};

const buscarTarefa = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!uuidSchema.safeParse(objectId).success) {
      return res.status(400).json({ erro: 'UUID inválido' });
    }

    const tarefa = await tarefaService.buscarTarefa(objectId);

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    return res.status(200).json(tarefa);

  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao buscar tarefa' });
  }
};

const atualizarTarefa = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!uuidSchema.safeParse(objectId).success) {
      return res.status(400).json({ erro: 'UUID inválido' });
    }

    const validacao = atualizarTarefaSchema.safeParse(req.body);

    if (!validacao.success) {
      return res.status(400).json({
        erro: validacao.error.issues
      });
    }

    const tarefa = await tarefaService.atualizarTarefa(
      objectId,
      validacao.data
    );

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    return res.status(200).json(tarefa);

  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao atualizar tarefa' });
  }
};

const excluirTarefa = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!uuidSchema.safeParse(objectId).success) {
      return res.status(400).json({ erro: 'UUID inválido' });
    }

    const tarefa = await tarefaService.excluirTarefa(objectId);

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    return res.status(200).json({
      mensagem: 'Tarefa excluída com sucesso'
    });

  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao excluir tarefa' });
  }
};

module.exports = {
  criarTarefa,
  listarTarefas,
  buscarTarefa,
  atualizarTarefa,
  excluirTarefa
};