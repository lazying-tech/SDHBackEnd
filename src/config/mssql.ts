import { sqlConfig } from "./config.js";
import * as mssql from "mssql";
// mssql.query()

export const ExecuteQueryString = async function (queryString: string) {
  try {
    let pool = await mssql.connect(sqlConfig);

    return await pool.query(queryString);
  } catch (error) {
    throw error;
  }
};

export const ConnectDatabase = async function () {
  try {
    const pool = await mssql.connect(sqlConfig);
    // const query = "select * from NHOM"
    // const result = await mssql.query([query])
    // console.dir(result)
    // const result = await ExecuteQueryString("select * from CHUONG")
    console.log("Database connected");
    return pool;
  } catch (error) {
    console.log("Error");
    throw error;
  }
};

export { mssql };
