import { useState } from "react";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();
  if (!show) {
    return (
      <section className=".show-details">
        <p>Please select a show to learn more.</p>
      </section>
    );
  }
  return (
    <div className="show-details">
      <section>
        <EpisodeList
          name={show.name}
          episodes={show.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      </section>
      <section>
        <EpisodeDetails episode={selectedEpisode} />
      </section>
    </div>
  );
}
