module.exports = {
  getAll: (req, res, next) => {
    const dbinstance = req.app.get('db');

    dbinstance.get_inventorys()
      .then(inventory => res.status(200).send(inventory))
      .catch(err => {
        res.status(500).send({ errorMessage: "get all oppsies" });
        console.log(err);
      });
  },
  create: (req, res, next) => {
    const dbinstance = req.app.get('db');
    const { name, price, imageurl } = req.body;

    dbinstance.create_inventory([name, price, imageurl])
      .then(() => res.status(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "oppsies" });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const dbinstance = req.app.get('db');
    const { id } = req.params;

    dbinstance.getone_inventory(id)
      .then(inventory => res.status(200).send(inventory))
      .catch(err => {
        res.status(500).send({ errorMessage: "get one oppsies" });
        console.log(err);
      });
  },
  update: (res, req, next) => {
    const dbinstance = req.app.get('db');
    const { params, query } = req;

    dbinstance.update_inventory([params.id, query.desc])
      .then(() => {
        res.status(200);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "update is oppsies" });
        console.log(err);
      });
  },
  delete: (res, req, next) => {
    const dbinstance = req.app.get('db');
    const { id } = req.params;

    dbinstance.delete_inventory([id])
      .then(() => {
        res.status(200);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "delete oppsies" });
        console.log(err);
      });
  }
};
