import mongoose, { Schema, Document } from 'mongoose';

//message interface
export interface Message extends Document {
  content:string;
  createdAt:Date;
}

//message schema
const MessageSchema: Schema<Message> = new Schema({
   content:{ String,
   required: true
   },
   createdAt:{
      type: Date,
      default: Date.now,
      required: true
       }
  })

  //interface for user
  export interface User extends Document {
    username:string;
    email:string;
    password:string;
    verifiedCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessage:boolean; 
    messages:Message[];
  }

  //User schema
  const UserSchema: Schema<User> = new Schema({
    username:{
      type: String,
      required: [true, 'Please provide a username'],
      unique: true
    },
    email:{
      type: String,
      required: [true, 'Please provide an email'],
      unique:true,
      match: [/.+\@.+\..+/, 'Please provide a valid email']        
    },
    password:{
      type: String,
      required: [true, 'Password is required'],
    },
    verifiedCode:{
      type: String,
      required: [true, 'VerifyCode is required'],
    },
    verifyCodeExpiry:{
      type: Date,
      required: [true, ' verifyCodeExpiry is required'],
    },
    isVerified:{
      type: Boolean,
      default: false,
    },
    isAcceptingMessage:{
      type: Boolean,
      required: true
    },
    messages:[MessageSchema]
  })

  
  const UserModel=(mongoose.models.User as mongoose.Model<User>)|| mongoose.model<User>("User",UserSchema);

  export default UserModel;
