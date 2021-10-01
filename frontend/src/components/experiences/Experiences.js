import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar'

export default function Experiences() 
{
    const [expData, setExpData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/experiences")
      .then((res) => {
            setExpData(res.data);
            setLoading(false);
      })
      .catch((err) => console.log(err));
  },[]);
    return (
        <div className="flex flex-row">
            <Sidebar/>
            <div>
                {expData.map((collab) => (
                    <h1>{collab.title}</h1>
                ))}
            </div>
        </div>
    )
}
