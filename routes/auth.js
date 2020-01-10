// const User = require("./database/models/User");
// const session = require("express-session");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const bcrypt = require("bcryptjs");
// const redis = require("redis");
// const RedisStore = require("connect-redis")(session);

// const saltRounds = 12;

// let client = redis.createClient({ url: process.env.REDIS_URL });

// app.use(
//   session({
//     store: new RedisStore({ client }),
//     secret: process.env.REDIS_SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
// );

// function isAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     return res.redirect("/login.html");
//   }
// }
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new LocalStrategy(function(username, password, done) {
//     return new User({ username: username })
//       .fetch()
//       .then(user => {
//         console.log("this is the user:", user);

//         if (user === null) {
//           return done(null, false, { message: "bad username or password" });
//         } else {
//           user = user.toJSON();

//           bcrypt.compare(password, user.password).then(res => {
//             // Happy route: username exists, password matches
//             if (res) {
//               return done(null, user); //this is the user that goes to serialize
//             }
//             // Error Route: Username exists, password does not match
//             else {
//               return done(null, false, { message: "bad username or password" });
//             }
//           });
//         }
//       })
//       .catch(err => {
//         console.log("error: ", err);
//         return done(err);
//       });
//   })
// );

// passport.serializeUser(function(user, done) {
//   console.log("serializing");

//   return done(null, { id: user.id, username: user.username });
// });

// passport.deserializeUser(function(user, done) {
//   console.log("deserializing");
//   console.log(user);
//   return done(null, user);
// });

// app.use(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login.html"
//   })
// );

// app.post("/register", (req, res) => {
//   bcrypt.genSalt(saltRounds, (err, salt) => {
//     if (err) {
//       console.log(err);
//     } // return 500

//     bcrypt.hash(req.body.password, salt, (err, hash) => {
//       if (err) {
//         console.log(err);
//       } // return 500

//       return new User({
//         username: req.body.username,
//         password: hash
//       })
//         .save()
//         .then(user => {
//           console.log(user);
//           return res.redirect("/login.html");
//         })
//         .catch(err => {
//           console.log(err);
//           return res.send("Error creating account");
//         });
//     });
//   });
// });

// app.get("/logout", (req, res) => {
//   req.logout();
//   res.send("logged out");
// });