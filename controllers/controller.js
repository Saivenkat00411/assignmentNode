const taskmodel = require('../models/task')
const getDetails = async (req, res) => {
    const { startDate, endDate } = req.query;
    const validStatuses = ["COMPLETED", "IN PROGRESS", "REJECTED"];

    try {
        const transactions = await taskmodel.find({
            date: { $gte: new Date(startDate).getTime(), $lte: new Date(endDate).getTime() },
            status: { $in: validStatuses }
        }).sort({ date: -1 });

        res.json(transactions);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



module.exports = { getDetails }