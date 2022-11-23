const express = require('express');
const app = express();

app.use(express.json());

const artist = [
    { id: 1, artistName: 'John Doe', mbid: 'bfcc6d75-a6a5-4bc6-8282-47aec8531818', url: 'www.last.fm/music/Cher' }
]

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.get('/api/artist', (req, res) => {
    res.send(artist);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

app.post('/api/artist', (req, res) => {
    if(!req.body.name || req.body.name.length < 3) {
        // 400 Bad Request
        res.status(400).send('Name is required and should be minimum 3 char')
        return;
    }

    const artist = {
        id: artist.length + 1,
        name: req.body.name
    };
    artist.push(artist);
    res.send(course);
});

app.get('api/artist/:id', (req, res) => {
    const artist = artist.find(c => c.id === parseInt(req.params.id));
    if (!artist) res.status(400).send('Err');
    res.send(artist); 
});


// PORT 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}..`));
// app.post()
// app.put()
// app.delete()