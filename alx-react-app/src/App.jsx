import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      {/* You can reuse the component with different props */}
      <UserProfile 
        name="John" 
        age="30" 
        bio="A software developer who enjoys traveling." 
      />
    </div>
  );
}

export default App;
