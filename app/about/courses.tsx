

export default function courses() {
    return (
        <>
            <div className=" img flex-wrap justify-center flex ">
                <h1 className="text-center  text-3xl">Core Courses (Common in All Specializations):</h1>
                <h4 className="text-center text-md">Every participant of the program will start by completing the following three core courses:</h4>
                <div className="text-center p-5 border-2 w-96 shadow-2xl ease-in-out duration-300  mt-20">
                    <h1 className="text-2xl">Quarter I (Core)</h1>
                    <p className="font-semibold">CS-101: Object-Oriented Programming using TypeScript</p>
                    <p>1. HTML and CSS (Homework)</p>
                    <p>2. Web 3.0 and Metaverse Theory</p>
                    <p>3. Fundamentals of JavaScript </p>
                    <p>4. Object-Oriented Programming with TypeScript</p>
                    <p>5. Fundamentals of Version Control with Git </p>
                </div>
                <div  className="text-center p-5 border-2 w-96 shadow-2xl ease-in-out duration-300  mt-20">
                    <h1 className="text-2xl">Quarter II (Core)</h1>
                    <p className="font-semibold">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                  
                    <p>1. Next.js 13 using Chakra UI and TailwindCSS</p>
                    <p>2. UI/UX Design with Figma, TailwindCSS, and Chakra UI</p>
                    <p>3. API Routes with Next.js</p>
                    <p>4. SQL and Prisma</p>
                    <p>5. AWS Application Composer</p>
                    {/* <p>Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF)</p> */}
                    <p>6. Build Full-Stack Next.js 13 Jamstack Templates</p>
                    <p>7.Build QraphQL APIs</p>
                </div>
                <div  className="text-center mb-10  p-5 border-2 w-96 shadow-2xl ease-in-out duration-300  mt-20">
                   <h1  className="text-2xl">Quarter III Web3 and Metaverse</h1>
                   <p  className="font-semibold">W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</p>
                   <p>Blockchain and Metaverse Theory</p>
                   <p>Smart Contract Development in Solidity</p>
                   <p>Dapp Development using Ethers.js and Next.js 13</p>
                   <p>Tokennomics</p>
                </div>
                <div  className="text-center mb-10 p-5 border-2 w-96 shadow-2xl ease-in-out duration-300  mt-20">
                    <h1  className="text-2xl">Quarter IV Web3 and Metaverse</h1>
                    <p  className="font-semibold">MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</p>
                    <p>Open Metaverse Web Development</p>
                    <p>Blender 3D asset Creation for the Metaverse</p>
                    <p></p>
                </div>
            </div>
        </>
    )
}
 