const express  = require('express');
const router  = express.Router();

const prodController = require('../controllers/products');
const {authenticator, allowCustomer, 
  allowAdmin, allowSeller} = require('../lib/common');

router.post('/category', authenticator, allowAdmin, async (req, res) => {
  const response = await prodController.createProductCategory(req.body)
  return res.status(response.status).send(response)
})

router.post('/add', authenticator, allowSeller, async (req, res) => {
  const response = await prodController.createProduct(req.body)
  return res.status(response.status).send(response)
})

router.get('/fetch/:id', async (req, res) => {
  req.body.id = Number(req.params.id);
  const response = await prodController.fetchProd(req.body)
  return res.status(response.status).send(response)
})

router.put('/update/:id', authenticator, allowSeller, async (req, res) => {
  req.body.id = Number(req.params.id);
  const response = await prodController.updateProduct(req.body);
  return res.status(response.status).send(response)
})

router.delete('/item/:id', authenticator, allowSeller, async (req, res) => {
  req.body.id = Number(req.params.id);
  const response = await prodController.removeProduct(req.body)
  return res.status(response.status).send(response)
})

router.put('/readd/:id', authenticator, allowSeller, async (req, res) => {
  req.body.id = Number(req.params.id);
  const response = await prodController.reAddProduct(req.body);
  return res.status(response.status).send(response)
});

module.exports = router;