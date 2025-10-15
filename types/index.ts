/**
 * TIPOS E INTERFACES DO APLICATIVO (React Native)
 * 
 * Este arquivo contém todas as definições de tipos TypeScript
 * utilizadas em todo o aplicativo para garantir type safety
 */

// Enum para definir os times disponíveis
export type TimeType = 'TIME A' | 'TIME B';

// Interface que define a estrutura de um participante
export interface Participante {
  id: string; // ID único do participante
  nome: string; // Nome do participante
  time: TimeType; // Time ao qual o participante pertence
}

// Interface que define a estrutura de uma turma
export interface Turma {
  id: string; // ID único da turma
  nome: string; // Nome da turma
  participantes: Participante[]; // Array de participantes da turma
  dataCriacao: string; // Data de criação da turma (ISO string)
}

// Tipo para as rotas do aplicativo
export type Route = 'lista' | 'nova-turma' | 'detalhe-turma';

// Interface para o contexto de navegação
export interface NavigationContext {
  currentRoute: Route;
  turmaAtual: string | null; // ID da turma selecionada
}
