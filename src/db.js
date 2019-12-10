import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("post.db");

export class DB {
  static init() {
    return new Promise((res, rej) => {
      db.transaction(tx => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT)",
          [],
          res,
          (_, err) => rej(err)
        );
      });
    });
  }

  static getPosts() {
    return new Promise((res, rej) => {
      db.transaction(tx => {
        tx.executeSql(
          "SELECT * from posts",
          [],
          (_, result) => res(result.rows._array),
          (_, error) => rej(error)
        );
      });
    });
  }
}
