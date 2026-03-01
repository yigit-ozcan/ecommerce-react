import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
