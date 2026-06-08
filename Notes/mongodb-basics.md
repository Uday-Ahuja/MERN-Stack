# MongoDB — Basics

## What is MongoDB?
A NoSQL document database that stores data as BSON (Binary JSON) documents inside collections, instead of rows in tables. Schema-less by default — documents in the same collection can have different fields.

| SQL term | MongoDB equivalent |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |

---

## BSON Datatypes

| Type | Example |
|---|---|
| String | `"Uday"` |
| Number (Int/Double) | `25`, `3.14` |
| Boolean | `true` |
| Array | `["a", "b"]` |
| Object | `{ key: value }` |
| ObjectId | `ObjectId("64a...")` — auto-generated `_id` |
| Date | `ISODate("2024-01-01")` |
| Null | `null` |

---

## Shell Commands

```bash
mongosh                    # open shell
show dbs                   # list all databases
use mydb                   # switch to / create database
show collections           # list collections in current db
db.dropDatabase()          # delete current database
```

---

## CRUD Operations

### Insert
```js
db.users.insertOne({ name: "Uday", age: 20 });
db.users.insertMany([{ name: "A" }, { name: "B" }]);
```
Returns: object with `acknowledged: true` and `insertedId` / `insertedIds`.

### Find (Read)
```js
db.users.find({});                        // all documents → array
db.users.findOne({ name: "Uday" });       // first match → object
db.users.find({ age: { $gt: 18 } });      // with condition
```

**Projections** — control which fields are returned:
```js
db.users.find({}, { name: 1, email: 1, _id: 0 });
// 1 = include, 0 = exclude
```

### Update
```js
db.users.updateOne(
  { name: "Uday" },
  { $set: { age: 21 } }
);

db.users.updateMany(
  { gender: "Male" },
  { $set: { verified: true } }
);
```
Returns: object with `matchedCount`, `modifiedCount`.

Common update operators:
| Operator | Effect |
|---|---|
| `$set` | set field value |
| `$unset` | remove a field |
| `$inc` | increment numeric field |
| `$push` | add item to array |

### Delete
```js
db.users.deleteOne({ name: "Uday" });
db.users.deleteMany({ verified: false });
```
Returns: object with `deletedCount`.

---

## Aggregation
A pipeline-based data processing system. Each stage transforms the documents.

```js
db.users.aggregate([
  { $match: { gender: "Male" } },          // filter
  { $group: { _id: "$jobTitle", count: { $sum: 1 } } }, // group + count
  { $sort: { count: -1 } }                 // sort descending
]);
```

Common stages:
| Stage | Purpose |
|---|---|
| `$match` | filter documents (like WHERE) |
| `$group` | group + compute (like GROUP BY) |
| `$sort` | sort results |
| `$project` | reshape / select fields |
| `$limit` | limit number of results |