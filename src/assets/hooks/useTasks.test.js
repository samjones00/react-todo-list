import { renderHook, act } from '@testing-library/react-hooks';
import useTasks from './useTasks';

// Mock the taskService
jest.mock('../services/taskService', () => ({
  getTasks: jest.fn(() => Promise.resolve([{ $id: '1', title: 'Test', isComplete: false }])),
  createTask: jest.fn((title) => Promise.resolve({ $id: '2', title })),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
}));

describe('useTasks', () => {
  it('fetches tasks on mount', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTasks());
    await waitForNextUpdate();
    expect(result.current.taskList.length).toBeGreaterThan(0);
  });

  it('creates a new task', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTasks());
    await waitForNextUpdate();
    await act(async () => {
      await result.current.createTask('New Task');
    });
    expect(result.current.taskList.some(t => t.title === 'New Task')).toBe(true);
  });

  // Add more tests for updateTask, deleteTask, sortTasks, etc.
});