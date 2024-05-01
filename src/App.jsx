const App = () => {
  return (
    <div className="max-w-[1280px] m-auto px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <p className="bg-red-500 h-[200px]">item-1</p>
        <p className="bg-green-500 h-[200px]">item-2</p>
        <p className="bg-blue-500 h-[200px]">item-3</p>
        <p className="bg-orange-500 h-[200px] md:hidden xl:inline-block">
          item-4
        </p>
      </div>
    </div>
  );
};
export default App;
