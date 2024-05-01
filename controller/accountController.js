
import { StatusCodes } from "http-status-codes";
import { db } from "../model/connection.js";
import { response } from "../utils/response.js";
import bcrypt from "bcryptjs"
export const allStaffAccount = async (req,res) => {
    const query = `SELECT id,email,username,role FROM user WHERE role='aslab' OR role='laboran'`;
    try {
        const connection = await db.getConnection()
        const [result] = await connection.query({sql:query})
        if(!result) { 
            return response(res,404,null,"User Not Found")
        }
        connection.release()
        return response(res,200,result,"success")
    } catch (error) {
        console.log(error)
        return response(res, 500, null, "failed");
    }
}
export const editStaffAccount = async (req,res) => {
    const {email,username,role} = req.body;
    const {id} = req.params;
    console.log(id)
    const cekIdQuery = `SELECT * FROM user WHERE id=${id}`

    try {
        const connection = await db.getConnection()
        const [rows,fields] = await connection.query({sql:cekIdQuery})
        if(!rows) {
            connection.release();
            return response(res,404,null,"Akun Tidak Di Temukan")
        }
        await connection.query({sql:`UPDATE user SET email=?, username=?,role=? WHERE id=${rows[0].id}`, values:[email,username,role]})
        connection.release()
        return response(res,StatusCodes.OK,null,"success")
    } catch (error) {
        console.log(error)
        return response(res, StatusCodes.NOT_IMPLEMENTED, error, "Akun Tidak Di Temukan");

    }
}
export const createStaffAcoount = async (req,res) => {
    const { email, username, password,role } = req.body;
    if (!email && !username && !password) {
      return response(res, 500, null, "failed");
    }

    try {
      const connection = await db.getConnection();
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await connection.query({
        sql: `INSERT INTO user (email,username,password,role) VALUES (?,?,?,?)`,
        values: [email, username, hashedPassword,role],
      });
      connection.release();
      return response(res, 200, result, "success");
    } catch (error) {
      console.log(error);
    }
}
export const deleteStaffAcoount = async (req,res) => {
    const {id} = req.params
    const cekIdQuery = `SELECT * FROM user WHERE id=${id}`;
    try {
        const connection = await db.getConnection()
         const [rows, fields] = connection.query({ sql: cekIdQuery });
         if (!rows) {
           connection.release();
           return response(res, 404, null, "Akun Tidak Di Temukan");
         }
         await connection.query({sql:`DELETE FROM user WHERE ${rows[0].id}`})
         connection.release()
         return response(res,StatusCodes.OK,null,"success")
    } catch (error) {
        console.log(error)
        return response(res,StatusCodes.NOT_IMPLEMENTED,error,`Error: ${error.message}`)
    }
}
export const getAccountById = async (req,res) => {
    const {id} = req.params;
    try {
        const connection = await db.getConnection()
        const [result,fields] = await connection.query({sql:`SELECT email,username,role FROM user WHERE id=${id}`})
        if(!result){
                    return response(
                      res,
                      StatusCodes.NOT_FOUND,
                      error,
                      `failed`
                    )
        }
        connection.release()
        return response(res,StatusCodes.OK,result,"success")
    } catch (error) {
        console.log(error)
        return response(res,StatusCodes.NOT_IMPLEMENTED,error,`Error: ${error.message}`)

    }
}