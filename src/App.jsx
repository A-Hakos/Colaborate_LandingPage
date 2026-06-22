import react from "react";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Web/Routing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow w-full">
          <Routing />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
