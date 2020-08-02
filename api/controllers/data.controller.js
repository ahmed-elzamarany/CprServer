let data = []

exports.receive = async (req, res) => {

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

exports.send = async (req, res) => {
	try {
		data=[]
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
