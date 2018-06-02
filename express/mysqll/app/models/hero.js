import database from "../../config/database"

class Hero {
   
    constructor(row) {
        this.id = row['id']
        this.name = row['name']
        this.city = row['city']
        this.createdAt = row['created_at']
        this.updatedAt = row['updated_at']
    }

    static findAll() {
        const connection = database.get()
        return connection.query('SELECT * FROM hero')
                        .then((rows)=> {
                            return rows.map((row) => {
                                return new Hero(row)
                            })
                        })
    }

    static findById(id) {
        const connection = database.get()
        return connection.query('SELECT * FROM hero WHERE id = ?', [id])
                            .then((rows) => {
                                console.log(rows)
                            })
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            city: this.city
        }
    }
}

export { Hero }