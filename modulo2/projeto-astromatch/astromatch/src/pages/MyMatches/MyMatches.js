import { baseUrl } from "./../../constants/base_url.js";
import { headersConfig } from "./../../constants/headers.js";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MyMatches () {
    const [matchesList, setMatchesList] = useState([]);

    useEffect(() => {
        getMatches();
    }, [])

    const getMatches = async () => {
        try {
          const response = await axios.get(`${baseUrl}/matches`)
          setMatchesList(response.data.matches)
          console.log(response.data.matches);
        } catch (err) {
          console.log(err)
        };
      };

      const matches = matchesList.map((match) => {
        return (
            <div key={match.id}>
                <img src={match.photo} alt="Foto do perfil" />
                <p>{match.name}, {match.age}</p>
            </div>
        )
      });
    return (
        <div>
            <h2>My matches</h2>
            {matches}
        </div>        
    );
};