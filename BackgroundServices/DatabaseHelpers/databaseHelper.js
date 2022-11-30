const mssql = require('mssql')
const sqlConfig = require("../Config/index")

class Connection{
    constructor(){
        this.connToDb()
    }

    connToDb = async()=>{
        try{
            this.pool = await mssql.connect(sqlConfig)
        } catch(error){
            throw new Error(error.message)
        }
    }

    createRequest = async(req, data={})=>{
        const keys = Object.keys(data)
        keys.map((name)=>{
            const value = data[name]
            req.input(name, value)
        })
        return req
    }

    execProc = async(PROC, data={})=>{
        try {
            let request = await this.pool.request()
            request = await this.createRequest(request, data)
            const result = await request.execute(PROC)
            return result
        } catch (error) {
            throw new Error(error.message)
        }
    }

    query = async(query)=>{
        try {
            const result = await this.pool.request().query(query)
            return result
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = {
    execProc: new Connection().execProc,
    query: new Connection().query
}