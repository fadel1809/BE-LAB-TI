import  {db}  from "../model/connection.js"
import { response } from "../utils/response.js";
import {StatusCodes} from "http-status-codes";


export const editContent = async (req, res) => {
    const {judul_section1,konten_section1,konten_section2,konten_alat,konten_ruang} = req.body;
    const query = "UPDATE content SET judul_section1=?, konten_section1=?, konten_section2=?, konten_alat=?, konten_ruang=?"
    try{
        const connection = await db.getConnection();
        await connection.query({sql:query,values:[judul_section1,konten_section1,konten_section2,konten_alat,konten_ruang]})
        connection.release()
        return response(res, 201,null, "success")
    }catch(err){
        console.log(err)
        return response(res, StatusCodes.BAD_REQUEST, err, "Terjadi Kesalahan Server")
    }
}

export const getContent = async (req,res) => {
    const query = "SELECT * FROM content"
    try {
        const connection = await db.getConnection();
        const [rows] = await connection.query({sql:query})
        connection.release()
        return response(res, 200,rows, "success")
    }catch(err){
        console.log(err)
        return response(res, StatusCodes.BAD_REQUEST, err, "Error")
    }
}