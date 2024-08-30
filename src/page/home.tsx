import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/Store";
import { fetchOcid } from "../store/OcidSlice";
import { fetchBasicData } from "../store/BasicSlice";
import { BasicData } from "../api/character/Types";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SearchBox from "../component/SearchBox";
import SearchButton from "../component/SearchButton";

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

    const doEnter = () => {
        clickOcid();
    }
    
    useEffect(() => {
        if (ocid && ocidStatus === 'succeeded') {
            dispatch(fetchBasicData(ocid));
        }
    }, [ocid, ocidStatus, dispatch]);

    return (
        <>
            <div className="daily">
                <Header />
                <div className="content">
                    <SearchBox
                        className=""
                        value={characterName} 
                        maxLength={20}
                        placeholder="캐릭터 닉네임을 입력해주세요"
                        autoComplete="off"
                        onChange={(e) => setCharacterName(e.target.value)}
                        onEnter={doEnter}
                    />
                    <SearchButton
                        onClick={clickOcid} 
                        className=""
                    >
                        <svg 
                            width="12" 
                            height="12" 
                            viewBox="0 0 12 12" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M11.824 11.0391L8.68035 7.89844C9.3607 7.07812 9.73607 6.02344 9.73607 4.875C9.73607 2.20312 7.53079 0 4.85631 0C2.15836 0 0 2.20312 0 4.875C0 7.57031 2.18182 9.75 4.85631 9.75C5.9824 9.75 7.03812 9.375 7.8827 8.69531L11.0264 11.8359C11.1437 11.9531 11.2845 12 11.4487 12C11.5894 12 11.7302 11.9531 11.824 11.8359C12.0587 11.625 12.0587 11.2734 11.824 11.0391ZM1.1261 4.875C1.1261 2.8125 2.79179 1.125 4.87977 1.125C6.94428 1.125 8.63343 2.8125 8.63343 4.875C8.63343 6.96094 6.94428 8.625 4.87977 8.625C2.79179 8.625 1.1261 6.96094 1.1261 4.875Z" 
                                fill="white" 
                            />
                        </svg>
                    </SearchButton>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;