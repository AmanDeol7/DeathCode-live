export default function Heading({title, description}: {title: string; description: string;}){
    <>  
        <p className="text-white text-2xl font-[500] pb-2 mx-[4rem] "> {title}</p>
        <p className="text-gray-500 font-normal pb-2 mx-[4rem] "> {description}</p>
    </>
}