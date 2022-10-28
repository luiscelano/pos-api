import mssql from 'mssql'

export const executeQuery = async (query) => {
  await mssql.connect({
    server: 'localhost',
    database: 'PROYECTO_POS',
    user: 'sa',
    password: 'Admin12345!',
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
