import React from 'react'
import {
  ChakraProvider,
  Container,
  theme,
  Box,
} from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BeerListPage from './pages/BeerListPage'
import BeerPage from './pages/BeerPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth="1024px" p="0">
        <Navbar />
        <Box p={[4, 8]}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route
              path="/beer-list"
              element={<BeerListPage />}
            ></Route>
            <Route path="/beer/:id" element={<BeerPage />}></Route>
          </Routes>
        </Box>
      </Container>
    </ChakraProvider>
  )
}

export default App
