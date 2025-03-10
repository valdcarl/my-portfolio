import React from "react";

const About = () => {
    return (
        <div 
            name='about' 
            id='about' 
            className="w-full h-screen text-white"
        >
        {/* container with grayish background flexed to stack in a unique way */}
            <div className="flex flex-col justify-center items-center w-full h-full">
                {/*Title section using grid */}
                <div className="py-32 rounded-lg bg-navy-950 flex flex-col justify-center items-center w-5/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-center pb-8 pl-4">
                            <p className="sm:text-right text-7xl font-bold inline">
                                Carlos Valdez
                            </p>
                        </div>
                        <div className="flex items-center">
                            {/* Profile Picture */}
                            <img 
                                src="/profile-image.jpg"
                                alt="profile-image" 
                                className=" rounded-3xl max-w-[300px] max-h-[400px]"
                            />
                        </div>
                        {/*Content section with responsive grid*/}
                    </div>
                <div className="items-center gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>
                                Hi. Let's build togther!
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default About
