import { useEffect, useState } from "react";
import Faq from "../componets/Faq";

function App() {
  const [dataFaqs, setDataFaqs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setDataFaqs(data);
    };
    fetchData();
  }, []);
  
  return (
  <section>
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41"><path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/></svg>
      <h1>FAQs</h1>
    </header>
    <main>
    {dataFaqs.map((data,index)=>(<Faq key={index} question={data.question} answer={data.answer}/>))}
    </main>
  </section>
    
  )
}

export default App
