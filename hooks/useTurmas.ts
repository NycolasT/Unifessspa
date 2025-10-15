/**
 * HOOK CUSTOMIZADO PARA GERENCIAR TURMAS (React Native)
 * 
 * Este hook encapsula toda a lógica de gerenciamento de turmas,
 * incluindo CRUD completo e persistência no AsyncStorage
 */

import { useState, useEffect } from 'react';
import { Turma, Participante, TimeType } from '../types';
import { loadTurmas, saveTurmas, generateId } from '../utils/storage';

export const useTurmas = () => {
  // Estado que armazena todas as turmas
  const [turmas, setTurmas] = useState<Turma[]>([]);
  // Estado para controlar se os dados já foram carregados
  const [loading, setLoading] = useState(true);

  /**
   * EFFECT: Carrega as turmas do AsyncStorage na montagem do componente
   */
  useEffect(() => {
    const carregarTurmas = async () => {
      const turmasCarregadas = await loadTurmas();
      setTurmas(turmasCarregadas);
      setLoading(false);
    };

    carregarTurmas();
  }, []);

  /**
   * EFFECT: Salva as turmas no AsyncStorage sempre que o estado mudar
   */
  useEffect(() => {
    if (!loading) {
      saveTurmas(turmas);
    }
  }, [turmas, loading]);

  /**
   * FUNÇÃO: Adiciona uma nova turma
   * @param nome - Nome da turma a ser criada
   * @returns ID da turma criada
   */
  const adicionarTurma = (nome: string): string => {
    const novaTurma: Turma = {
      id: generateId(),
      nome,
      participantes: [],
      dataCriacao: new Date().toISOString(),
    };

    setTurmas(prev => [...prev, novaTurma]);
    return novaTurma.id;
  };

  /**
   * FUNÇÃO: Remove uma turma pelo ID
   * @param turmaId - ID da turma a ser removida
   */
  const removerTurma = (turmaId: string): void => {
    setTurmas(prev => prev.filter(turma => turma.id !== turmaId));
  };

  /**
   * FUNÇÃO: Adiciona um participante a uma turma específica
   * @param turmaId - ID da turma
   * @param nomeParticipante - Nome do participante
   * @param time - Time ao qual o participante pertence
   */
  const adicionarParticipante = (
    turmaId: string,
    nomeParticipante: string,
    time: TimeType
  ): void => {
    setTurmas(prev =>
      prev.map(turma => {
        if (turma.id === turmaId) {
          const novoParticipante: Participante = {
            id: generateId(),
            nome: nomeParticipante,
            time,
          };

          return {
            ...turma,
            participantes: [...turma.participantes, novoParticipante],
          };
        }
        return turma;
      })
    );
  };

  /**
   * FUNÇÃO: Remove um participante de uma turma
   * @param turmaId - ID da turma
   * @param participanteId - ID do participante a ser removido
   */
  const removerParticipante = (turmaId: string, participanteId: string): void => {
    setTurmas(prev =>
      prev.map(turma => {
        if (turma.id === turmaId) {
          return {
            ...turma,
            participantes: turma.participantes.filter(p => p.id !== participanteId),
          };
        }
        return turma;
      })
    );
  };

  /**
   * FUNÇÃO: Busca uma turma específica pelo ID
   * @param turmaId - ID da turma
   * @returns Turma encontrada ou undefined
   */
  const buscarTurma = (turmaId: string): Turma | undefined => {
    return turmas.find(turma => turma.id === turmaId);
  };

  // Retorna o estado e as funções para serem utilizadas nos componentes
  return {
    turmas,
    loading,
    adicionarTurma,
    removerTurma,
    adicionarParticipante,
    removerParticipante,
    buscarTurma,
  };
};
