// Single Card for description of Team Member

function AboutMe({url, description}) 
{
    return (
        <div className="flex flex-col rounded-lg mx-2 my-2 bg-white shadow-lg p-4 gap-10 h-full inset-y-0 ">
            {/* Profile photo */}
            <img src={url} alt="Profile photo" className="w-52 small:w-72 medium:w-full place-self-center rounded-lg"></img>
            
            {/* Description */}
            <div className="flex flex-col w-auto overflow-visible">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default AboutMe;