import { useState } from "react";
import { ocid } from "../api/character/Ocid"
import { basic } from "../api/character/Basic";
import { BasicData } from "../api/character/Types";

function Home () {

    const [characterName, setCharacterName] = useState("");
    const [basicData, setBasicData] = useState<BasicData | null>(null);

    const clickOcid = async() => {
        if(characterName) {
            try{
                const ocidValue = await ocid(characterName);
                if(ocidValue) {
                    const data = await basic(ocidValue);
                    setBasicData(data);
                }
            }
            catch(error) {
                console.log(error);
            }
        }
    }

    return(
        <>
            <input 
                placeholder="캐릭터명을 입력하세요"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
            />
            <button onClick={clickOcid}>
                클릭
            </button>
            <div>
                {basicData && (
                        <div>
                            <h2>캐릭터 정보</h2>
                            <p>이름: {basicData.character_name}</p>
                            <p>서버: {basicData.world_name}</p>
                            <p>성별: {basicData.character_gender}</p>
                            <p>직업: {basicData.character_class}</p>
                            <p>레벨: {basicData.character_level}</p>
                            <p>경험치: {basicData.character_exp_rate}</p>
                            <img src={basicData.character_image} alt={basicData.character_name} />
                        </div>
                    )}
            </div>
        </>
    )
}

export default Home;