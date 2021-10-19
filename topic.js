const {Kafka} = require("kafkajs")

run();
async function run()
{

    try {
        const kafka = new Kafka({ 
            "clinetId" : "myapp",
            "brokers":["localhost:29092"]

    })
    const admin = kafka.admin();
    console.log("connecting.....")
    await admin.connect()
    console.log("Connected")
    await admin.createTopics({
        "topics":[{ 
            "topic" : "Users",
            "numPartitions": 2

        }]
    }) 
    console.log("Created successfully")
    await admin.disconnect();

    }
    catch(ex)
    {
        console.error(`error from run: ${ex} `)
    }

}