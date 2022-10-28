import mssql from 'mssql'
// import { DB_SERVER, DB_PORT, DATABASE, DB_USER, DB_PASSWORD } from 'config/development'

// const { DB_SERVER, DB_PORT, DATABASE, DB_USER, DB_PASSWORD } = global?.config

export const executeQuery = async (query) => {
  const { DB_SERVER, DB_PORT, DATABASE, DB_USER, DB_PASSWORD } = global?.config

  await mssql.connect({
    server: DB_SERVER,
    port: DB_PORT,
    database: DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,

    options: {
      trustServerCertificate: true
    }
  })
  const request = new mssql.Request()

  return new Promise((resolve, reject) => {
    request.query(query, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}
