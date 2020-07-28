import React from "react";

export default function Link({link}){
    return(
        <div>
            <div>
                {link.description} {link.url} {link.createdAt}
            </div>
        </div>
    )
}