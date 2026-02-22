export default function Header() {
  return (
    <header className="p-6 sm:px-0 shadow dark:bg-blue-900">
      <div className="center container mx-auto flex justify-between ">
        <h1 className="text-xl font-bold sm:text-2xl">Where in the world?</h1>
        <button type="button" className="cursor-pointer">
          Dark Mode
        </button>
      </div>
    </header>
  );
}
