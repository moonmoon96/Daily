import { useState } from "react";
import { ocid } from "../api/ocid"

function Home () {

    const [characterName, setCharacterName] = useState("");

    return(
        <>
            <input 
                placeholder="캐릭터명을 입력하세요"
            />
            <button onClick={ ocid }>
                클릭
            </button>
        </>
    )
}

export default Home;