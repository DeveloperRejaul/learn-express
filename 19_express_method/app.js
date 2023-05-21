// for json data
app.use(express.json());

// For Form-encode data
app.use(express.urlencoded({ extended: true }));

// Content-Type : application/octet-stream
// for raw Buffer // resive Buffer //convert Buffer to text way => req.body.toString()
// app.use(express.raw());

// for text
// Content-Type : text/plain
// app.use(express.text());

// const admin = express.Router();
// const router = express.Router();
// app.use(router); // create router object
// app.use(admin); // create router object
// router.get(); // using example
// admin.get();
