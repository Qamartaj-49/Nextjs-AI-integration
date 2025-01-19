import mongoose from 'mongoose';

type connectionobject ={
  isConnected? : number 
}

const connection: connectionobject = {};  


async function dbConnect(): Promise<void> {
  if(connection.isConnected){
    console.log("Database is already connected");

    return;
  } 
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '' );
    console.log(db);
    connection.isConnected = db.connections[0].readyState;

  } catch (error) {
    
    console.log('Error in connecting to database',error );
    process.exit(1);

  }

}

export default dbConnect;