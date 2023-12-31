const router = require("express").Router();

router.route('/').get((req, res) => {
  msg = `Hello ${req.query.name || "World"} from get request`;
  res.json({ msg });
});

router.route('/:lang?').get((req, res) => {
  switch (req.params.lang) {
    case "es":
      msg = "Hola Mundo!!";
      break;

    case "en":
      msg = "Hello World!!";
      break;

    case "fr":
      msg = "BonJour Monde!!";
      break;

    default:
      msg = "Hallo Welt!!";
    
  }

  res.json({ msg });
});

//haciendo un post

// router.route('/').post((req,res)=>{
//     msg = `Hello ${req.body.name || "World"} from post request!`;
//     res.json({msg});
// })

router.route('/').post((req,res)=>{
    let result = req.body.a * req.body.b;
    res.json({result});
})

module.exports = router;
