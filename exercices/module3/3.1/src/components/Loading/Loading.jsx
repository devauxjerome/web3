import App from 'components/App/App';
import { useState } from 'react'

const Loading = () => {
    const [loading, setLoading] = useState(true);
    
    setTimeout(() => setLoading(false), 3000);
    return (
        <>
        {loading ? (<h1> EN cours de chargement</h1>) : (<App />)}
        </>
    )

   }
   
   
     export default Loading