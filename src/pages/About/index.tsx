export const AboutPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen h-full w-full text-slate-50 py-12 px-60">
      <div className="flex flex-col justify-start items-start h-full w-full gap-12">
        <nav className="text-slate-500 flex gap-4 items-center justify-center">
          <a href="/" className="hover:text-sky-500">
            Home
          </a>
          <a href="/about" className="hover:text-sky-500">
            About
          </a>
          <a
            href="/todo"
            className="p-2 bg-sky-600 text-slate-100 rounded"
          >
            Todo App
          </a>
        </nav>
        <div className="flex flex-col justify-start items-start h-auto w-full gap-12">
          <h1 className="text-5xl font-bold text-slate-100">
            About the creator
          </h1>
          <div className="flex gap-8 w-full">
            <img
              className="w-64 h-64 rounded-full object-cover border-2 border-slate-600"
              src="https://github.com/euperinotti.png"
              alt="Profile picture"
            />
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold m-0">Name</h3>
                <p className="text-slate-500 text-lg m-0">
                  Guilherme Perinotti
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold m-0">Job</h3>
                <p className="text-slate-500 text-lg m-0">
                  Fullstack Developer
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold m-0">Biography</h3>
                <p className="text-slate-500 text-lg m-0">
                  I love resolving problems. I am always in search of knowledge
                  and ways to put into practice the knowledge I have acquired. I
                  am currently pursuing higher education at Centro Universitário
                  Fundação Assis Gurgacz, where I have also been working as a
                  Full Stack developer since 2023.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold m-0">Github</h3>
                <a
                  href="https://github.com/euperinotti"
                  className="text-sky-500 text-lg m-0 underline"
                >
                  euperinotti
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
