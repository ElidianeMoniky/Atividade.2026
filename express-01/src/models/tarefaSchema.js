
const { z } = require('zod');

// Validação para criar uma tarefa
const criarTarefaSchema = z.object({
  descricao: z.string()
    .trim()
    .min(1, 'A descrição é obrigatória'),

  concluida: z.boolean()
    .optional()
    .default(false)
});

// Validação para atualizar uma tarefa
const atualizarTarefaSchema = z.object({
  descricao: z.string()
    .trim()
    .min(1, 'A descrição não pode ficar vazia')
    .optional(),

  concluida: z.boolean().optional()
}).refine(
  (dados) => Object.keys(dados).length > 0,
  { message: 'Informe pelo menos um campo para atualizar' }
);

// Validação do UUID
const uuidSchema = z.string().uuid();

module.exports = {
  criarTarefaSchema,
  atualizarTarefaSchema,
  uuidSchema
};
