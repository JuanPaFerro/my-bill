import ItemsList from "./components/ItemsList/ItemsList";
import AddForm from "./components/AddForm/AddForm";

function App() {

  return (
    <div className="h-screen w-full p-4 lg:py-8 bg-bg-pattern flex justify-center items-center">
      <div className="h-full w-full lg:w-2/5 border border-gray bg-black px-8 py-6 rounded-lg flex flex-col space-y-8 ">
        <div className="text-4xl text-lightGreen font-bold">Create an Invoice :</div>
        <AddForm />
        <ItemsList />
      </div>
    </div>
  );
}

export default App;
