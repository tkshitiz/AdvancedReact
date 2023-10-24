import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
//create user
const user = await prisma.user.create({
    data :{
        name : 'kshitiz thapa',
        email :'tkshitiz60@gmail.com'
    },
})

// console.log(user)
} 
main()
.then(async () =>{
    await prisma.$disconnect();
})
.catch(async (e) =>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})