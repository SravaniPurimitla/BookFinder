import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-indigo-600 text-white py-4 shadow-md">
        <h1 className="text-center text-3xl font-semibold">Book Finder</h1>
      </header>
      <Home />
    </div>
  );
}

export default App;
