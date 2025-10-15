/**
 * UTILITÁRIOS DE ARMAZENAMENTO LOCAL (React Native)
 * 
 * Este arquivo contém funções para gerenciar o AsyncStorage
 * de forma centralizada e type-safe
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Turma } from '../types';

// Chave utilizada para armazenar as turmas no AsyncStorage
const STORAGE_KEY = '@turmas_app:turmas';

/**
 * Função para carregar todas as turmas do AsyncStorage
 * @returns Promise com array de turmas ou array vazio se não houver dados
 */
export const loadTurmas = async (): Promise<Turma[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as Turma[];
  } catch (error) {
    console.error('Erro ao carregar turmas:', error);
    return [];
  }
};

/**
 * Função para salvar todas as turmas no AsyncStorage
 * @param turmas - Array de turmas a ser salvo
 */
export const saveTurmas = async (turmas: Turma[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(turmas));
  } catch (error) {
    console.error('Erro ao salvar turmas:', error);
  }
};

/**
 * Função para gerar um ID único
 * Utiliza timestamp + número aleatório para garantir unicidade
 * @returns String com ID único
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
