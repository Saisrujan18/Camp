import { useState, useLayoutEffect } from 'react';
import { AuthProvider } from '../../authContext/AuthContext';

function NewCollab(props)
{
    const closePopup = (event) => {
		props.visibility(false)
		event.preventDefault();
	}
	const useWindowSize = () =>
	{
		const [size, setSize] = useState([0, 0])
		useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
		}, []);
		return size;
	}

	const [width, height] = useWindowSize()
    console.log(width+" "+height)
    return ( 
        <div className={`w-{width} h-{height} rounded-lg bg-whit`}>
            Hello
            <button className="p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded" onClick={closePopup}>
				Close
            </button>
        </div>
    );
}
 
export default NewCollab;