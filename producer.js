const {Kafka} = require("kafkajs")
const msg= process.argv[2];

run();
async function run()
{

    try {
        const kafka = new Kafka({ 
            "clinetId" : "myapp",
            "brokers":["localhost:29092"]

    })
    const producer = kafka.producer();
    console.log("connecting.....")
    await producer.connect()
    console.log("Connected")
    const partition = msg[0] < "N" ? 0 : 1;
    const result = await producer.send({
        "topic": "Usernames",
        "messages":[{ 
            "value": msg,
            "partition": partition

        }]
    }) 
    console.log(`sent successfully! ${JSON.stringify(result)}`)
    await producer.disconnect();

    }
    catch(ex)
    {
        console.error(`error from run: ${ex} `)
    }

}