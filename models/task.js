const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
        },
        date:
        {
            type: Date
        },
        sender: {
            type: Object,
            firstName: {
                type: String,
                required: [true, ['Enter FirstName']]
            },
            lastName: {
                type: String,
                required: [true, ['Enter LastName']]

            },
            dateOfBirth: {
                type: String,
            },
            IDNumber: {
                type: String,
            }
        },
        recipient: {
            type: Object,
            firstName: {
                type: String,
                required: [true, ['Enter Recipients firstname']]
            },
            lastName: {
                type: String,
                required: [true, ['Enter Recipients lastname']]
            },
            email: {
                type: String,
                required: [true, 'Enter Email'],
                match: [
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    'Please provide a valid email',
                ]
            },
            accountNumber: {
                type: String,
            },
            bank: {
                type: String,
                required: [true, 'Provide Bank Name']
            }
        },
        Amount: {
            type: Number,
        },
        CurrencyCd: {
            type: String,
        },
        Comments: {
            type: String,
        },
        status: {
            type: String,
            enum: ['COMPLETED', 'IN PROGRESS', 'PENDING', 'REJECTED'],
            default: 'IN PROGRESS'
        }

    },
    { timestamps: true }
)

module.exports = mongoose.model('Tasks', TaskSchema)