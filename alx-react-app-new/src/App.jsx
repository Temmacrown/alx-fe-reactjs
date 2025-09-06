import Header from './components/Header'; 
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage'; // ✅ import it properly

function App() {
  return (
    <div>
      <WelcomeMessage />  {/* ✅ now it's a component, not a string */}
      <Header />
      <MainContent />
      <Footer />
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;
