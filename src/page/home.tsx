import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/Store";
import { fetchOcid } from "../store/OcidSlice";
import { fetchBasicData } from "../store/BasicSlice";
import { BasicData } from "../api/character/Types";
import Header from "./Header";

function Home () {

    const [characterName, setCharacterName] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const ocid = useSelector((state: RootState) => state.ocid.value);
    const basicData = useSelector((state: RootState) => state.basic.data) as BasicData | null;
    const ocidStatus = useSelector((state: RootState) => state.ocid.status);
    const basicStatus = useSelector((state: RootState) => state.basic.status);

    const clickOcid = async() => {
        if(characterName) {
            try {
                await dispatch(fetchOcid(characterName));
            } catch (error) {
                console.error(error);
            }
        }
    }
    
    useEffect(() => {
        if (ocid && ocidStatus === 'succeeded') {
            dispatch(fetchBasicData(ocid));
        }
    }, [ocid, ocidStatus, dispatch]);

    return (
        <>
            <Header />
            <input 
                placeholder="캐릭터명을 입력하세요"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
            />
            <button onClick={clickOcid}>
                클릭
            </button>
            <div>
                {basicStatus === 'loading' && <p>로딩 중...</p>}
                {basicStatus === 'failed' && <p>데이터를 가져오는 데 실패했습니다.</p>}
                {basicStatus === 'succeeded' && basicData && (
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
    );
}

export default Home;