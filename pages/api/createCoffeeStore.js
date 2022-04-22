import {
  table,
  getMinifiedRecords,
  findRecordByFilter,
} from "../../lib/airTable"

const createCoffeeStore = async (req, res) => {
  const { id, name, neighbourhood, address, imgUrl, voting } = req.body
  if (req.method === "POST") {
    if (id) {
      try {
        const records = await findRecordByFilter(id)

        if (records.length !== 0) {
          res.json(records)
        } else {
          //create record
          if (name) {
            const createRecords = await table.create([
              {
                fields: {
                  id,
                  name,
                  address,
                  neighbourhood,
                  voting,
                  imgUrl,
                },
              },
            ])

            res.json(getMinifiedRecords(createRecords))
          } else {
            res.status(400)
            res.json({ message: "Id or name is missing" })
          }
        }
      } catch (err) {
        console.log("Error creating or finding store", err)
        res.status(500)
        res.json({ message: "Error creating or finding store", err })
      }
    } else {
      res.status(400)
      res.json({ message: "Id is missing" })
    }
  }
}

export default createCoffeeStore
