let data = []

exports.send = async (req, res) => {

	try {
		let read = req.body.read
		data.push(read)
		console.log(read)
			return res.json({
				data: {
					data
				}
			})
	} catch (err) {
		res.status(400).json({
			error: {
				message: "UNKNOWN"
			}
		})
	}

}

exports.get = async (req, res) => {
	try {
		let sending =data
		data=[]
			return res.json(
					sending.length
				
			)
	} catch (err) {
		res.status(400).json({
			error: {
				message: "UNKNOWN"
			}
		})
	}


}
