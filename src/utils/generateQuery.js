const stringifyObject = (object, delimiter) =>
  Object.keys(object)
    .map((key) => (typeof object[key] == 'string' ? `${key} = '${object[key]}'` : `${key} = ${object[key]}`))
    .join(delimiter)

const joinTables = (instance, tables) =>
  tables
    .map((table) => {
      return `INNER JOIN ${table.name} on ${instance}.${table.field} = ${table.name}.${table.field}`
    })
    .join(' ')

export const generateQuery = (instance) => {
  return {
    insert: (object) => {
      const columns = [],
        values = []
      if (object)
        for (const key of Object.keys(object)) {
          columns.push(key)
          values.push(typeof object[key] == 'string' ? `'${object[key]}'` : object[key])
        }
      return `INSERT INTO ${instance} (${columns.join(',')}) VALUES(${values.join(',')})`
    },
    update: (object, query) =>
      `UPDATE ${instance} SET ${stringifyObject(object, ',')} WHERE ${stringifyObject(query, ' AND ')}`,
    delete: (query) => `DELETE FROM ${instance} WHERE ${stringifyObject(query, ' AND ')}`,
    select: (tables, query) => {
      let output = `SELECT * FROM ${instance}`
      if (tables) output = output.concat(` ${joinTables(instance, tables)}`)
      if (query) output = output.concat(` WHERE ${stringifyObject(query, ' AND ')}`)
      return output
    },
    selectLastElement: (field) => `SELECT * FROM ${instance} where ${field} = IDENT_CURRENT('${instance}')`
  }
}
