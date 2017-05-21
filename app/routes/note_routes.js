module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
    const details = { '_id': '5921f2d935606e4f9d6c830e'};
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'Something went down'});
      } else {
        res.send(item);
      }
    });
  });

  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
