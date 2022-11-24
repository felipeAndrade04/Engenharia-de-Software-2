import create from "zustand";

export type User = {
  id: string;
  name: string;
  pontuation: number;
};

export type GameMode = "SinglePlayer" | "MultiPlayer";

export type Difficulty = "easy" | "medium" | "hard";

const INITIAL_STATE = {
  gameMode: "" as GameMode,
  user1: {
    id: "1",
    name: "",
    pontuation: 0,
  } as User,
  user2: {
    id: "2",
    name: "",
    pontuation: 0,
  } as User,
  currentUser: "2",
  difficulty: "easy" as Difficulty,
};

type State = typeof INITIAL_STATE & {
  clear: () => void;
  updateDifficulty: (difficulty: Difficulty) => void;
  updateGameMode: (gameMode: GameMode) => void;
  updateUser1Name: (name: string) => void;
  updateUser2Name: (name: string) => void;
};

export const useGameStore = create<State>((set) => ({
  ...INITIAL_STATE,
  clear: () => set(INITIAL_STATE),
  updateDifficulty: (difficulty) => set({ difficulty }),
  updateGameMode: (gameMode) => set({ gameMode }),
  updateUser1Name: (name) =>
    set((state) => ({
      user1: {
        ...state.user1,
        name,
      },
    })),
  updateUser2Name: (name) =>
    set((state) => ({
      user2: {
        ...state.user2,
        name,
      },
    })),
}));
