import { MongoClient } from 'mongodb';

let client;
let db;
async function connectDB(){
  if(!client){ client=new MongoClient(process.env.MONGO_URI); await client.connect(); db=client.db('starlightAC'); }
  return db;
}

export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end();
  const { clientId, reason, durationMs } = req.body;
  if(!clientId||!reason||!durationMs) return res.status(400).json({error:'Missing fields'});
  const database = await connectDB();
  const bans = database.collection('bans');
  await bans.updateOne({clientId},{$set:{reason, until:Date.now()+durationMs}},{upsert:true});
  res.json({success:true});
}
