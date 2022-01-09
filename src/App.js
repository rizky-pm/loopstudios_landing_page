import React from 'react';
import styled from 'styled-components/macro';

import Header from './components/Header';
import About from './components/About';
import Creations from './components/Creations';
import Footer from './components/Footer';

const Container = styled.div``;

const Main = styled.main``;

function App() {
    return (
        <Container>
            <Header />
            <Main>
                <About />
                <Creations />
                <Footer />
            </Main>
        </Container>
    );
}

export default App;
