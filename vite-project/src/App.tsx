
import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Image />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
