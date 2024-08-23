export const HomePage = () => {
  return (
    <div className="bg-slate-900 h-screen text-slate-50 py-12 px-60">
      <div className="flex flex-col justify-start items-start h-full w-full gap-12">
        <nav className="text-slate-500 flex gap-4 items-center justify-center">
          <a href="/" className="hover:text-sky-500">
            Home
          </a>
          <a href="/about" className="hover:text-sky-500">
            About
          </a>
          <a href="/todo" className="p-2 bg-sky-600 text-slate-100 rounded">
            Todo App
          </a>
        </nav>
        <div className="flex flex-col justify-start items-start h-auto w-full gap-6 max-w-lg">
          <h1 className="text-5xl font-bold text-slate-100">
            What is a To do app?
          </h1>
          <p className="text-slate-500 text-lg">
            What is a ToDo List? The definition is a simple one. It’s a list of
            tasks you need to complete or things that you want to do. Most
            typically, they’re organised in order of priority. Traditionally,
            they’re written on a piece of paper or post it notes and act as a
            memory aid. As technology has evolved we have been able to create a
            todo lists with excel spreadsheets, word documents, email lists,
            todo list apps, Microsoft to do and google to do list to name a few.
            You can use a to do list in your home and personal life, or in the
            workplace. Having a list of everything you need to do written down
            in one place means you shouldn’t forget anything important. By
            prioritising the tasks in the list you plan the order in which
            you’re going to do them and can quickly see what needs your
            immediate attention and what tasks you can leave until a little
            later.
          </p>
        </div>
      </div>
    </div>
  );
};
