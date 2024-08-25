import express from 'express';
import Song from '../models/song.js';
const router = express.Router();

// Create or add multiple songs
router.post('/songs', async (req, res) => {
  const songs = req.body;
  try {    
    const newSongs = Array.isArray(songs) ? songs : [songs];
    const savedSongs = await Song.insertMany(newSongs);
    res.status(201).json(savedSongs);
    console.log('Songs added successfully');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// List all songs or filter by genre
router.get('/songs', async (req, res) => {
  try {
    const { genre } = req.query;
    const filter = genre ? { genre: { $regex: new RegExp(genre, 'i') } } : {};
    const songs = await Song.find(filter);
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a song
router.put('/songs/:id', async (req, res) => {
  const { title, artist, album, genre } = req.body;
  try {
    const updatedSong = await Song.findByIdAndUpdate(
      req.params.id,
      { title, artist, album, genre },
      { new: true }
    );
    res.json(updatedSong);
    console.log(`Updated song with ID: ${req.params.id}`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a song
router.delete('/songs/:id', async (req, res) => {
  try {
    const result = await Song.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Song not found' });
    }
    console.log(`Deleted song with ID: ${req.params.id}`);
    res.json({ message: 'Song deleted successfully' });
  } catch (err) {
    console.error('Error deleting song:', err.message);
    res.status(500).json({ message: err.message });
  }
});



// Get statistics
router.get('/songs/stats', async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const artists = await Song.distinct('artist');
    const albums = await Song.distinct('album');
    const genres = await Song.distinct('genre');

    const genreStats = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } },
    ]);

    const artistStats = await Song.aggregate([
      { $group: { _id: '$artist', songCount: { $sum: 1 }, albums: { $addToSet: '$album' } } },
      { $project: { artist: '$_id', songCount: 1, albumCount: { $size: '$albums' } } }
    ]);

    res.json({
      totalSongs,
      totalArtists: artists.length,
      totalAlbums: albums.length,
      totalGenres: genres.length,
      genreStats,
      artistStats,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
