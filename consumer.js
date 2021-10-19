const {Kafka} = require("kafkajs")

run();
async function run()
{

    try {
        const kafka = new Kafka({ 
            "clinetId" : "myapp",
            "brokers":["localhost:29092"]

    })
    const consumer = kafka.consumer({"groupId" : "test"});
    console.log("connecting.....")
    await consumer.connect()
    console.log("Connected")
    consumer.subscribe({
        "topic" : "Usernames",
        "fromBeginning": true
    })

    await consumer.run({
        "eachMessage": async result =>{
            console.log(`received msg ${result.message.value} on partition ${result.partition}`)
        }
    })
    console.log()


    }
    catch(ex)
    {
        console.error(`error from run:  ${ex} `)
    }
    finally{

    }

}