var express = require('express');
var router = express.Router();

const CATALOGUE = [
  {
    id: 1,
    title: 'Voyage au centre de la terre 2',
    duration: 95,
    budget: 110000000,
    link: 'https://www.rottentomatoes.com/m/journey_to_the_center_of_the_earth_2_3d', 
  },
  {
    id: 2,
    title: 'SpiderMan : far from home',
    duration: 129,
    budget: 160000000,
    link: 'https://www.rottentomatoes.com/m/spider_man_far_from_home', 
  },
  {
    id: 3,
    title: 'Dune',
    duration: 155,
    budget: 165000000,
    link: 'https://www.rottentomatoes.com/m/dune_2021', 
  },
];

// Read all the pizzas from the menu
router.get('/', (req, res, next) => {
  console.log('GET /films');
  res.json(CATALOGUE);
});

module.exports = router;
