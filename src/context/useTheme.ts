import { THEME_TYPES } from '@/shared/constants'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES

interface ThemeState {
  theme: string
  toggleTheme: () => void
}

const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: THEME_LIGHT,
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
    }),
    {
      name: 'theme',
    },
  ),
)

export default useTheme
