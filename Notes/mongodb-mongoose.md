# MongoDB — Mongoose ODM

## What is Mongoose?
Mongoose is an Object Document Mapper (ODM) for MongoDB in Node.js. It adds schema enforcement, validation, and helper methods on top of the raw MongoDB driver.

```bash
npm install mongoose
```

---

## Connecting to MongoDB

```js
// connection.js
import mongoose from 'mongoose';

async function connectMongoDB(url) {
  return mongoose.connect(url);
}

export default connectMongoDB;

// index.js
connectMongoDB('mongodb://127.0.0.1:27017/mydb')
  .then(() => console.log('MongoDB Connected'));
```

---

## Schema
Defines the structure, types, and validation rules for documents in a collection.

```js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String },
  email:     { type: String, required: true, unique: true },
  jobTitle:  { type: String },
  gender:    { type: String }
}, { timestamps: true });
```

`timestamps: true` auto-adds `createdAt` and `updatedAt` fields.

### Schema field options
| Option | Purpose |
|---|---|
| `type` | data type (String, Number, Boolean, Date, etc.) |
| `required` | field must be present |
| `unique` | no duplicate values allowed |
| `default` | fallback value if not provided |
| `enum` | restrict to specific values |

---

## Model
A Model is a class built from a schema. It provides the interface to interact with the MongoDB collection.

```js
const User = mongoose.model('User', userSchema);
// collection name auto-inferred: 'users' (lowercase + plural)

export default User;
```

---

## Mongoose CRUD Methods

### Create
```js
const user = await User.create({ firstName: 'Uday', email: 'u@u.com' });
// returns: the created document (object)
```

### Read
```js
const all = await User.find({});                  // returns: array
const one = await User.findById(req.params.id);   // returns: object or null
const match = await User.findOne({ email: 'u@u.com' }); // returns: object or null
```

### Update
```js
const updated = await User.findByIdAndUpdate(
  id,
  { $set: { jobTitle: 'Engineer' } },
  { new: true }   // return updated doc, not original
);
// returns: updated document or null
```

### Delete
```js
const deleted = await User.findByIdAndDelete(id);
// returns: deleted document or null
```

---

## Raw Driver vs Mongoose

| Feature | Raw Driver (`mongodb`) | Mongoose |
|---|---|---|
| Schema enforcement | None | Yes |
| Validation | Manual | Built-in |
| Methods | Basic CRUD | Extended helpers |
| Relationships | Manual | `populate()` |
| Use case | Flexibility, performance | Structure, rapid development |

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| `mongoose.model('User', schema)` called multiple times | Define model once, export and import |
| `findByIdAndUpdate` without `{ new: true }` | Returns old document, not updated |
| Forgetting `await` on async DB calls | Gets Promise instead of result |
| `unique: true` without proper error handling | Crashes on duplicate email insert |