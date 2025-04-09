function Create() {
  return (
    <div>
      <h1 className="font-bold text-2xl ml-10 mt-6">Create New Recepies</h1>
      <div className="w-180 opacity-50 h-100 border-1 rounded-2xl ml-40 mt-5">
        <div className="mt-5 ml-5">
          <p className="font-black">Title</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-168 mt-2"
          />
          <p className="font-black mt-2">Cooking Time</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-168 mt-2"
          />
          <p className="font-black mt-2">Ingrediets</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-168 mt-2"
          />
          <p className="font-black mt-2">Title</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-168 mt-2"
          />
          <button className="btn btn-outline btn-accent rounded-1xl mt-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
