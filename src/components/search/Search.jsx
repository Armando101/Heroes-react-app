import { useForm } from "../../hooks/useForm";

export const Search = () => {
  const [{ searchText }, handleInputChange, reset] = useForm({
    searchText: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
    reset();
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchText}
            />

            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>
      </div>
    </>
  );
};
