import "./search.css";

const Search = ({ onChangeHandler }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        placeholder="search for robot"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Search;
