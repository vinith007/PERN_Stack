require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./db");
const cors = require("cors");
const { rows } = require("pg/lib/defaults");

app.use(cors());
app.use(express.json());

//get all restaurants
app.get("/api/v1/restarunts", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "successful",
      results: result.rows.length,
      data: {
        restaurants: result.rows,
      },
    });
  } catch (error) {}
});
//get single restaurant
app.get("/api/v1/restarunts/:id", async (req, res) => {
  try {
    const restaurant = await db.query(
      "SELECT * FROM restaurants WHERE id = $1",
      [req.params.id]
    );

    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "successful",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//create resrtaurants
app.post("/api/v1/restarunts", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name,location,price_range) values($1,$2,$3) returning *",

      [req.body.name, req.body.location, req.body.price_range]
    );

    res.status(200).json({
      status: "successful",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//update restaurants
app.put("/api/v1/restarunts/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range=$3 where id =$4 returning *",

      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "successful",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//delete restaurants
app.delete("/api/v1/restarunts/:id", async (req, res) => {
  try {
    const result = await db.query("DELETE from restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "successful",
      data: {
        message: `successfully delete ${req.params.id}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/restarunts/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );

    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
