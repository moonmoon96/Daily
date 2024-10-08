import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { fetchOcid } from "../../store/OcidSlice";
import { fetchBasicData } from "../../store/BasicSlice";
import SearchBox from "../../component/SearchBox";
import SearchButton from "../../component/SearchButton";

export default function Search () {

    const [characterName, setCharacterName] = useState("");
    
    const dispatch = useDispatch<AppDispatch>();
    const ocid = useSelector((state: RootState) => state.ocid.value);
    const ocidStatus = useSelector((state: RootState) => state.ocid.status);

    const clickOcid = async() => {
        if(characterName) {
            try {
                await dispatch(fetchOcid(characterName));
            } catch (err) {
                console.log(err);
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

    return(
        <div className="home-searchform">
                                <SearchBox
                                    className="home-searchinput"
                                    value={characterName} 
                                    maxLength={20}
                                    placeholder="캐릭터 닉네임을 입력해주세요"
                                    autoComplete="off"
                                    onChange={(e) => setCharacterName(e.target.value)}
                                    onEnter={doEnter}
                                />
                                <SearchButton
                                    onClick={clickOcid} 
                                    className="home-searchbutton"
                                >
                                    <svg 
                                        width="18" 
                                        height="18" 
                                        viewBox="0 0 18 18" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16.625 14.875C17.0938 15.375 17.0938 16.1562 16.625 16.6562C16.125 17.125 15.3438 17.125 14.8438 16.6562L11.125 12.9062C9.84375 13.75 8.28125 14.1875 6.59375 13.9688C3.71875 13.5625 1.40625 11.2188 1.03125 8.375C0.5 4.125 4.09375 0.53125 8.34375 1.0625C11.1875 1.4375 13.5312 3.75 13.9375 6.625C14.1562 8.3125 13.7188 9.875 12.875 11.125L16.625 14.875ZM3.46875 7.5C3.46875 9.71875 5.25 11.5 7.46875 11.5C9.65625 11.5 11.4688 9.71875 11.4688 7.5C11.4688 5.3125 9.65625 3.5 7.46875 3.5C5.25 3.5 3.46875 5.3125 3.46875 7.5Z" 
                                            fill="#426DFB" 
                                        />
                                    </svg>
                                </SearchButton>
                            </div>
    )
}