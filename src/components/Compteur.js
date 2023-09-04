import { useState } from "react";

        function Compteur() {
            const [compteur, setCompteur] = useState(0);

    

            const increment = () =>{
                setCompteur(compteur + 1);
    }

    const decrement = () =>{
        setCompteur(compteur - 1);
    }

    
        return(
            <div>
                <h3>{compteur}</h3>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>

            </div>
        )
    

}

export default Compteur;
