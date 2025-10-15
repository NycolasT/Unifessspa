/**
 * APLICATIVO PRINCIPAL: Gestão de Turmas (React Native)
 * 
 * Este é o componente raiz da aplicação React Native que gerencia:
 * - Navegação entre telas usando sistema de rotas simples
 * - Estado global das turmas usando hook customizado
 * - Persistência de dados com AsyncStorage
 * 
 * FUNCIONALIDADES PRINCIPAIS:
 * ✓ Adicionar nova turma
 * ✓ Remover turma
 * ✓ Adicionar participante em times (A ou B)
 * ✓ Remover participante
 * ✓ Navegação entre páginas
 * ✓ Armazenamento local (AsyncStorage)
 * ✓ Componentização
 */

import React from 'react';
import { StatusBar, Alert, ActivityIndicator, View, StyleSheet } from 'react-native';
import { useTurmas } from './hooks/useTurmas';
import { TurmasListScreen } from './screens/TurmasListScreen';
import { NovaTurmaScreen } from './screens/NovaTurmaScreen';
import { DetalheTurmaScreen } from './screens/DetalheTurmaScreen';
import { Route, TimeType } from './types';
import { theme } from './styles/theme';

export default function App() {
  // HOOK CUSTOMIZADO: Gerencia todas as operações com turmas
  const {
    turmas,
    loading,
    adicionarTurma,
    removerTurma,
    adicionarParticipante,
    removerParticipante,
    buscarTurma,
  } = useTurmas();

  // ESTADO: Controla qual tela está sendo exibida
  const [currentRoute, setCurrentRoute] = React.useState<Route>('lista');

  // ESTADO: Armazena o ID da turma selecionada
  const [turmaAtualId, setTurmaAtualId] = React.useState<string | null>(null);

  /**
   * FUNÇÃO DE NAVEGAÇÃO: Vai para tela de nova turma
   */
  const navegarParaNovaTurma = () => {
    setCurrentRoute('nova-turma');
  };

  /**
   * FUNÇÃO DE NAVEGAÇÃO: Seleciona uma turma e vai para tela de detalhes
   * @param turmaId - ID da turma selecionada
   */
  const navegarParaDetalheTurma = (turmaId: string) => {
    setTurmaAtualId(turmaId);
    setCurrentRoute('detalhe-turma');
  };

  /**
   * FUNÇÃO DE NAVEGAÇÃO: Volta para a lista de turmas
   */
  const navegarParaLista = () => {
    setCurrentRoute('lista');
    setTurmaAtualId(null);
  };

  /**
   * FUNÇÃO: Cria uma nova turma e navega para sua tela de detalhes
   * @param nome - Nome da turma a ser criada
   */
  const handleCriarTurma = (nome: string) => {
    const novoId = adicionarTurma(nome);
    navegarParaDetalheTurma(novoId);
  };

  /**
   * FUNÇÃO: Remove a turma atual e volta para a lista
   */
  const handleRemoverTurma = () => {
    if (turmaAtualId) {
      // Confirma com o usuário antes de remover usando Alert nativo
      Alert.alert(
        'Remover turma',
        'Tem certeza que deseja remover esta turma?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Remover',
            style: 'destructive',
            onPress: () => {
              removerTurma(turmaAtualId);
              navegarParaLista();
            },
          },
        ]
      );
    }
  };

  /**
   * FUNÇÃO: Adiciona um participante à turma atual
   * @param nome - Nome do participante
   * @param time - Time ao qual o participante pertence
   */
  const handleAdicionarParticipante = (nome: string, time: TimeType) => {
    if (turmaAtualId) {
      adicionarParticipante(turmaAtualId, nome, time);
    }
  };

  /**
   * FUNÇÃO: Remove um participante da turma atual
   * @param participanteId - ID do participante a ser removido
   */
  const handleRemoverParticipante = (participanteId: string) => {
    if (turmaAtualId) {
      removerParticipante(turmaAtualId, participanteId);
    }
  };

  // Busca os dados da turma atual para exibir na tela de detalhes
  const turmaAtual = turmaAtualId ? buscarTurma(turmaAtualId) : null;

  // Exibe loading enquanto carrega dados do AsyncStorage
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.brandPrimary} />
      </View>
    );
  }

  /**
   * RENDERIZAÇÃO CONDICIONAL: Exibe a tela correta baseada na rota atual
   * Esta é uma forma simples de roteamento sem usar React Navigation Stack
   */
  return (
    <>
      {/* Configura a StatusBar para o tema escuro */}
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />

      {/* TELA: Lista de Turmas */}
      {currentRoute === 'lista' && (
        <TurmasListScreen
          turmas={turmas}
          onNovaTurma={navegarParaNovaTurma}
          onSelecionarTurma={navegarParaDetalheTurma}
        />
      )}

      {/* TELA: Nova Turma */}
      {currentRoute === 'nova-turma' && (
        <NovaTurmaScreen onVoltar={navegarParaLista} onCriarTurma={handleCriarTurma} />
      )}

      {/* TELA: Detalhe da Turma */}
      {currentRoute === 'detalhe-turma' && turmaAtual && (
        <DetalheTurmaScreen
          turma={turmaAtual}
          onVoltar={navegarParaLista}
          onAdicionarParticipante={handleAdicionarParticipante}
          onRemoverParticipante={handleRemoverParticipante}
          onRemoverTurma={handleRemoverTurma}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
