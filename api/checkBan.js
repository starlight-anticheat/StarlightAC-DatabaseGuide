import { MongoClient } from 'mongodb';

let client;
let db;
async function connectDB(){
  if(!client){ client=new MongoClient(process.env.MONGO_URI); await client.connect(); db=client.db('starlightAC'); }
  return db;
}

export default async function handler(req,res){
  const { clientId } = req.query;
  if(!clientId) return res.status(400).json({error:'Missing clientId'});
  const database = await connectDB();
  const bans = database.collection('bans');
  const ban = await bans.findOne({clientId});
  if(ban && ban.until>Date.now()) return res.json({banned:true, reason:ban.reason, until:ban.until});
  res.json({banned:false});
}
