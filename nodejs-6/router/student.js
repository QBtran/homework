const express = require("express");
const { ObjectId } = require("mongodb");
const studentRouter = express.Router();
const { db } = require("../db");

studentRouter.post("/", async (req, res) => {
  const { name, rank } = req.body;

  const respond = await db.students.insertOne({
    name,
    rank,
  });
  res.status(201);
  res.json(respond);
});

studentRouter.post("/add-many", async (req, res) => {
  try {
    const respond = await db.students.insertMany(req.body.data);
    res.status(201);
    res.json(respond);
  } catch (err) {
    res.status(500);
    res.json("err 401");
  }
});

studentRouter.get("/", async (req, res) => {
  try {
    const { id, name, rank } = req.headers;

    let student;
    if (id) {
      student = await db.students.findOne({
        _id: new ObjectId(id),
      });
    } else if (name) {
      student = await db.students
        .find({
          name,
        })
        .toArray();
    } else if (rank) {
      student = await db.students
        .find({
          rank: Number(rank),
        })
        .toArray();
    } else {
      student = await db.students.find({}).skip(19).limit(5).toArray();
    }
  } catch {
    res.status(500);
    res.json("err 401");
  }
});

studentRouter.put("/", async (req, res) => {
  try {
    const id = req.headers.id;
    const body = req.body;
    const filter = {
      _id: ObjectId(id),
    };
    const updateDoc = {
      $set: body,
    };
    const student = await db.students.updateOne(filter, updateDoc);
    res.status(201);
    res.status(student);
  } catch (err) {
    res.status(500);
    res.json("err 401");
  }
});
studentRouter.delete("/", async (req, res) => {
  try {
    const id = req.headers.id;
    const filter = {
      _id: new ObjectId(id),
    };
    const student = await db.students.deleteOne(filter);
    if (student.deletedCount === 1) {
      console.log("Successfully deleted ");
      res.json(student);
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
      res.json("No documents matched the query. Deleted 0 documents.");
    }
  } catch (error) {
    res.status(500);
    res.json("err 500");
  }
});
module.exports = studentRouter;
