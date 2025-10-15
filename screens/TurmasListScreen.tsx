/**
 * TELA: Lista de Turmas (React Native)
 * 
 * Tela principal que exibe todas as turmas cadastradas
 * Permite navegar para criar uma nova turma ou visualizar detalhes
 */

import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Header } from '../components/layout/Header';
import { Button } from '../components/common/Button';
import { TurmaCard } from '../components/turmas/TurmaCard';
import { Turma } from '../types';
import { styles } from './TurmasListScreen.styles';

interface TurmasListScreenProps {
  turmas: Turma[]; // Array com todas as turmas
  onNovaTurma: () => void; // Callback para navegar para tela de nova turma
  onSelecionarTurma: (turmaId: string) => void; // Callback para selecionar uma turma
}

export const TurmasListScreen: React.FC<TurmasListScreenProps> = ({
  turmas,
  onNovaTurma,
  onSelecionarTurma,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header da aplicação */}
      <Header />

      {/* Container principal do conteúdo */}
      <View style={styles.content}>
        {/* Título e subtítulo da tela */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Turmas</Text>
          <Text style={styles.subtitle}>jogue com a sua turma</Text>
        </View>

        {/* Lista de turmas */}
        {turmas.length === 0 ? (
          // Mensagem quando não há turmas cadastradas
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhuma turma cadastrada ainda.{'\n'}
              Crie sua primeira turma!
            </Text>
          </View>
        ) : (
          // Renderiza a lista de turmas usando FlatList
          // KEY: Usa o ID único de cada turma como key
          <FlatList
            data={turmas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TurmaCard
                nome={item.nome}
                onPress={() => onSelecionarTurma(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>

      {/* Botão para criar nova turma - fixo na parte inferior */}
      <View style={styles.buttonContainer}>
        <Button onPress={onNovaTurma}>Criar nova turma</Button>
      </View>
    </SafeAreaView>
  );
};
