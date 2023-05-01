import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
