import { Box, ChakraProvider, Container, theme } from '@chakra-ui/react'
import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import BeerListPage from './pages/BeerListPage'
import BeerPage from './pages/BeerPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth="1024px" p="0">
        <Navbar />
        <Box p={[4, 8]}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/beer-list" element={<BeerListPage />}></Route>
            <Route path="/beer/:id" element={<BeerPage />}></Route>
          </Routes>
        </Box>
      </Container>
    </ChakraProvider>
  )
}

export default App
