import create from "zustand";
import { persist } from "zustand/middleware";
import { CardType, cards } from "../pages/game/cards";

export type User = {
  id: string;
  name: string;
  pontuation: number;
};

export type GameMode = "SinglePlayer" | "MultiPlayer";

export type Difficulty = "easy" | "medium" | "hard";

type CurrentUser = "1" | "2";

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
  currentUser: "1" as CurrentUser,
  difficulty: "easy" as Difficulty,
  firstCard: {} as CardType,
  secondCard: {} as CardType,
  cards: [] as CardType[],
};

type State = typeof INITIAL_STATE & {
  clear: () => void;
  updateDifficulty: (difficulty: Difficulty) => void;
  updateGameMode: (gameMode: GameMode) => void;
  updateCurrentUser: (currentUser: CurrentUser) => void;
  updateUser1Name: (name: string) => void;
  updateUser2Name: (name: string) => void;
  updateUser1Pontuation: (pontuation: number) => void;
  updateUser2Pontuation: (pontuation: number) => void;
  updateFirstCard: (card: CardType) => void;
  updateSecondCard: (card: CardType) => void;
  updateCards: (cards: CardType[]) => void;
};

export const useGameStore = create<State>()(
  persist(
    (set) => ({
      ...INITIAL_STATE,
      clear: () => set(INITIAL_STATE),
      updateDifficulty: (difficulty) =>
        set({ difficulty, cards: cards[difficulty] }),
      updateGameMode: (gameMode) => set({ gameMode }),
      updateCurrentUser: (currentUser) => set({ currentUser }),
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
      updateUser1Pontuation: (pontuation) =>
        set((state) => ({
          user1: {
            ...state.user1,
            pontuation,
          },
        })),
      updateUser2Pontuation: (pontuation) =>
        set((state) => ({
          user2: {
            ...state.user2,
            pontuation,
          },
        })),
      updateFirstCard: (firstCard) => set({ firstCard }),
      updateSecondCard: (secondCard) => set({ secondCard }),
      updateCards: (cards) => set({ cards }),
    }),
    {
      name: "memorizando",
    }
  )
);
