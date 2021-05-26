import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Layout = ({ children }) => {
    return (
        <Container fluid className='p-0'>
            <div className="d-flex flex-column min-vh-100">
                <header>
                    <Navbar>
                        <Navbar.Brand href="/">
                            <img
                                alt="Home"
                                src="https://www.sarvika.com/wp-content/uploads/2018/12/logo.png"
                                width="85"
                                height="40"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                    </Navbar>
                </header>
                <main>
                    {children}
                </main>
                <footer className="mt-auto">
                    Footer
                </footer>
            </div>
        </Container>
    )
};

export default Layout;