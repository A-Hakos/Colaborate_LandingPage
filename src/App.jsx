import Footer from "./components/Footer";
import Banner from "./components/ui/carousel/Banner";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Get Header component */}
        <Header />

        {/* Get Banner component */}
        <Banner />

        {/* Get Content Component */}
        <main className="flex-grow">
          <div className="p-8 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold">Welcome to Our App</h1>
            <p>Content goes here...</p>
          </div>
        </main>

        {/* Get Footer component */}
        <Footer />
      </div>
    </>
  );
}

export default App;
