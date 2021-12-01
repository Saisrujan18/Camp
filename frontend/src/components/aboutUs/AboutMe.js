function AboutMe({url, description}) 
{
    // Variables required for the popup are declared over here.
    return (
        <div className="flex flex-col rounded-lg mx-2 my-2 bg-white shadow-lg p-4 gap-10 h-full inset-y-0 ">
            <img src={url} alt="Profile photo" className="w-52 small:w-72 medium:w-full place-self-center rounded-lg"></img>
            <div className="flex flex-col w-auto overflow-visible">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default AboutMe;