function AboutMe({url, description}) 
{
    // Variables required for the popup are declared over here.
    return (
        <div className="flex flex-col w-1/4 rounded-lg mx-2 my-2 bg-white shadow-lg p-4 justify-between gap-10 h-full inset-y-0 flex-1">
            <img src={url} alt="Profile photo"></img>
            <div className="w-auto ">
                {description}
            </div>
        </div>
    );
}

export default AboutMe;