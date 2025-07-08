import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show, selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className=".show-details">
        <p>Please select a show to learn more.</p>
      </section>
    );
  }
  return (
    <div className=".show-details">
      <section>
        <EpisodeList
          name={show.selectedEpisode.name}
          episodes={show.episodes}
          selectedEpisode={show.selectedEpisode}
          setSelectedEpisode={show.setSelectedEpisode}
        />
      </section>
      <section>
        <EpisodeDetails episode={show.episode} />
      </section>
    </div>
  );
}
