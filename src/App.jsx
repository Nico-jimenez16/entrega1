import ComponentA from './components/componentA';

const App = () => {
  return (
    <div className="App">
      <header className='w-full flex justify-center items-center h-16 bg-lime-500'>
        <h1 className='text-2xl text-white' >Entrega 1</h1>
      </header>
      <ComponentA />
    </div>
  );
}

export default App;
