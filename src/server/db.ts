import fs from 'fs/promises';
import path from 'path';
import { Expense } from '../lib/types';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'expenses.json');

export async function readExpenses(): Promise<Expense[]> {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(data) as Expense[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      // If file doesn't exist, return empty array (or maybe create it)
      return [];
    }
    throw new Error('Failed to read expenses data');
  }
}

export async function writeExpenses(expenses: Expense[]): Promise<void> {
  try {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(expenses, null, 2), 'utf-8');
  } catch (error) {
    throw new Error('Failed to write expenses data');
  }
}
