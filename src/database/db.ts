import moogose from 'mongoose';

async function connectDatabase() : Promise<void>{
    moogose.connect("mongodb+srv://jansey_sco:GD5ZNlF4RJ33INj3@cluster.efwcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
    .then(() => console.log("Connect database sucess!"))
    .catch(() => console.log("Connect database fail!"))
}

export default connectDatabase