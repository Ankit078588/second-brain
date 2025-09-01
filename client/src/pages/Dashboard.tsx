import { useEffect, useState } from "react";
import axios from "axios"
import Card from "../components/ui/Card"



const Dashboard = () => {
  const [userContent, setUserContent] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get('http://localhost:3000/api/contents');
      setUserContent(res.data.contents);
    } catch(e) {
      console.log(e);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="p-5 flex justify-center-safe flex-wrap gap-10">
      {userContent.map((item: {type: 'tweet'|'youtube', title: string, link: string}) => {
        return <Card type={item.type} title={item.title} link={item.link} />
      })}
    </div>
  )
}

export default Dashboard;