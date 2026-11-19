const express = require('express');

const router = express.Router();

const tarefaController = require('../controllers/tarefaController');

router.post('/', tarefaController.criarTarefa);

router.get('/', tarefaController.listarTarefas);

router.get('/:objectId', tarefaController.buscarTarefa);

router.put('/:objectId', tarefaController.atualizarTarefa);

router.delete('/:objectId', tarefaController.excluirTarefa);

module.exports = router;