import { BrowserRouter, Route, Routes } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Default />}>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default AppRoutes
