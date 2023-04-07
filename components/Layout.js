import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-gray-600 text-white to-gray-900 min-h-screen ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
