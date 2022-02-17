import React from "react";
import { useParams } from "react-router-dom";

export default function TripDetailsPage () {
    const params = useParams();
    
    

    return (
        <div>TripDetailsPage
            {params.id}
        </div>
    );
};