// src/App.jsx
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TrackList from "./TrackList";
import PlayerBar from "./PlayerBar";
import playlists from "./playlists";

// Demo fallback audio (royalty-free)
const FALLBACK_MP3 =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

function App() {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [audio, setAudio] = useState(null);
  const [mode, setMode] = useState("search");
  const [allPlaylists, setAllPlaylists] = useState({
    ...playlists,
    "Local Files": [], // always available
  });

  // Handle selecting a playlist
  const handleSelectPlaylist = (name) => {
    setMode("playlist");
    setTracks(allPlaylists[name]);
  };

  // Add track to a playlist
  const handleAddToPlaylist = (playlistName, track) => {
    setAllPlaylists((prev) => ({
      ...prev,
      [playlistName]: [...(prev[playlistName] || []), track],
    }));

    // If user is viewing that playlist, update UI immediately
    if (mode === "playlist" && playlistName === "Local Files") {
      setTracks((prev) => [...prev, track]);
    }
  };

  // Play a track
  const handlePlay = (track) => {
    if (audio) audio.pause();

    const previewUrl = track.previewUrl || track.preview || FALLBACK_MP3;
    const newAudio = new Audio(previewUrl);
    newAudio.play();

    setAudio(newAudio);
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  // Toggle Play / Pause
  const handlePlayPause = () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  // Toggle Favorites
  const handleToggleFavorite = (track) => {
    if (favorites.some((fav) => fav.id === track.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== track.id));
    } else {
      setFavorites([...favorites, track]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header Navigation */}
      <header className="p-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-bold">🎶 AudioMark Player</h1>
        <div className="space-x-2">
          <button
            onClick={() => setMode("search")}
            className={`px-3 py-1 rounded ${
              mode === "search" ? "bg-green-500" : "bg-gray-600"
            }`}
          >
            Search
          </button>

          {Object.keys(allPlaylists).map((name) => (
            <button
              key={name}
              onClick={() => handleSelectPlaylist(name)}
              className={`px-3 py-1 rounded ${
                mode === "playlist" && tracks === allPlaylists[name]
                  ? "bg-blue-500"
                  : "bg-gray-600"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {mode === "search" && <SearchBar onResults={setTracks} />}

        {/* Local upload */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Upload Local Music:</label>
          <input
            type="file"
            accept="audio/*"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files);
              const newTracks = files.map((file, idx) => ({
                id: Date.now() + idx,
                title: file.name.replace(/\.[^/.]+$/, ""),
                artist: "Local File",
                preview: URL.createObjectURL(file),
                cover: "https://via.placeholder.com/150",
              }));

              newTracks.forEach((track) =>
                handleAddToPlaylist("Local Files", track)
              );
            }}
            className="text-sm"
          />
        </div>

        {/* Track List */}
        <TrackList
          tracks={tracks}
          onPlay={handlePlay}
          onToggleFavorite={handleToggleFavorite}
          favorites={favorites}
          onAddToPlaylist={(track) => {
            const name = prompt(
              "Add to which playlist?",
              Object.keys(allPlaylists).join(", ")
            );
            if (name && allPlaylists[name]) {
              handleAddToPlaylist(name, track);
            }
          }}
        />
      </main>

      {/* Player Bar */}
      <PlayerBar
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
      />
    </div>
  );
}

export default App;
