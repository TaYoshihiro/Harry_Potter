// 省略

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('./index');
});

app.post('/', (req, res) => {
  try {
    controller(req.body.name, req.body.title, req.body.body);
    res.render('./index');
  } catch (e) {
    alert(e);
    res.end();
  }
});

app.listen(3000);
