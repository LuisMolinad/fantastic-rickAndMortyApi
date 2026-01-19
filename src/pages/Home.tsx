import Characters from "../components/Characters"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Rick & Morty Characters
      </h1>

      <Characters />
    </div>
  )
}

export default Home
