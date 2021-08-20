import { todoList } from './types';

export const ind = (arr: any[], id: number): number => arr.map(a => a.id === id).indexOf(true);