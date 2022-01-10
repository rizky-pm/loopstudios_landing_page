import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Header from './components/Header';
import About from './components/About';
import Creations from './components/Creations';
import Footer from './components/Footer';

const Container = styled.div`
    position: ${(props) => (props.showMenuOverlay ? 'fixed' : 'static')};
    overflow: hidden;
`;

const Main = styled.main``;

function App() {
    const [showMenuOverlay, setShowMenuOverlay] = useState(false);
    return (
        <Container showMenuOverlay={showMenuOverlay}>
            <Header
                showMenuOverlay={showMenuOverlay}
                setShowMenuOverlay={setShowMenuOverlay}
            />
            <Main>
                <About />
                <Creations />
                <Footer />
            </Main>
        </Container>
    );
}

export default App;
