import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      filters: ['all', 'completed', 'active'],
      username: '',

      setUser: (name) => set({ username: name }),
      removeUser: () => set({ username: '' }),

      addTask: (task, user) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: Date.now(), name: task, user, isCompleted: false },
          ],
        })),

      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((item) => item.id !== id),
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((item) =>
            item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
          ),
        })),
    }),
    {
      name: 'task-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
export default useTaskStore;
