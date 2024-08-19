import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes.tsx'
import React from 'react'

import global_pt from '@/translations/pt/global.json'
import global_en from '@/translations/en/global.json'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pt',
  resources: {
    pt: {
      global: global_pt,
    },
    en: {
      global: global_en,
    },
  },
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter >
          <AppRoutes />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
