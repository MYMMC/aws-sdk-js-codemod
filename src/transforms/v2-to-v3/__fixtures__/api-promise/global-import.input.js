import AWS from "aws-sdk";

const client = new AWS.DynamoDB();
const data = await client.listTables().promise();