import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  selectedShow,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      <ol>
        {shows.map((show) => (
          <a key={show.name}>
            <button
              type="button"
              onClick={() => setSelectedShow(show)}
              className={selectedShow?.name === show.name ? "selected" : ""}
            >
              {show.name}
            </button>
          </a>
        ))}
      </ol>
    </nav>
  );
}
