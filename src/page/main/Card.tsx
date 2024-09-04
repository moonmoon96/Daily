import { useEffect, useRef, useState } from "react";
import { ocid } from "../../api/character/Ocid";
import { dojang } from "../../api/rank/Dojang";
import { DojangData } from "../../api/Types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { fetchOcid } from "../../store/OcidSlice";
import { basic } from "../../api/character/Basic";

export default function Card() {

    const dojangRef = useRef<HTMLDivElement | null>(null);
    const theseedRef = useRef<HTMLDivElement | null>(null);
    const achievementRef = useRef<HTMLDivElement | null>(null);
    const unionRef = useRef<HTMLDivElement | null>(null);

    const MouseMove = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const viewportWidth = window.innerWidth;

            let rotateX, rotateY;

            const centerX = viewportWidth / 2;
            const normalizedX = (x - centerX) / centerX;

            if (viewportWidth < 768) {
                rotateY = normalizedX * -3;
                rotateX = 2 / 30 * y - 10;
            } else if (viewportWidth >= 768 && viewportWidth < 1144) {
                rotateY = normalizedX * -1;
                rotateX = 3 / 30 * y - 10;
            } else {
                rotateY = -1 / 5 * x + 20;
                rotateX = 4 / 30 * y - 19;
            }
            //console.log(`MouseMove - x: ${x}, y: ${y}`);
            ref.current.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };

    const MouseLeave = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.style.transform = 'perspective(400px) rotateX(0deg) rotateY(0deg)';
        }
    };

    const [dojangData, setDojangData] = useState<DojangData[]>([]);
    const [characterImage, setCharacterImage] = useState();

    const dispatch = useDispatch<AppDispatch>();
    const ocid = useSelector((state: RootState) => state.ocid.value);
    const ocidStatus = useSelector((state: RootState) => state.ocid.status);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // 데이터 로딩 시작
            try {
                const result = await dojang();
                setDojangData(result);

                const character_name = result[0]?.character_name; // data가 존재하는지 체크

                if (character_name) {
                    try {
                        await dispatch(fetchOcid(character_name));
                        if (ocid && ocidStatus === 'succeeded') {
                            const basic_data = await basic(ocid);
                            setCharacterImage(basic_data.character_image);
                            console.log(characterImage);
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false); // 데이터 로딩 완료
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <section className="home-main-first">
                <section
                    className="container dojang"
                    ref={dojangRef}
                    onMouseMove={(e) => MouseMove(e as React.MouseEvent<HTMLDivElement>, dojangRef)}
                    onMouseLeave={() => MouseLeave(dojangRef)}
                >
                    <header>
                        <h2>이번 주 무릉도장 1위</h2>
                    </header>
                    <div className="dojang-main">
                        <img
                            className="character-image"
                            src={characterImage}
                            alt="character"
                            loading="lazy"
                        />
                        <div>
                            <div className="level">
                                <div>
                                    <b>{dojangData[0].dojang_floor}층</b>
                                </div>
                                <span>{dojangData[0].dojang_time_record}</span>
                            </div>
                            <img
                                className="character-image"
                                src={characterImage}
                                alt="character"
                                loading="lazy"
                            />
                            <div className="info">
                                <div className="player">
                                    <span className="name">{dojangData[0].character_name}</span>
                                    <span className="level">Lv. {dojangData[0].character_level}</span>
                                </div>
                                <div className="job">
                                    {dojangData[0].character_class}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more">상세 보기</div>
                </section>
                <section
                    className="container theseed"
                    ref={theseedRef}
                    onMouseMove={(e) => MouseMove(e as React.MouseEvent<HTMLDivElement>, theseedRef)}
                    onMouseLeave={() => MouseLeave(theseedRef)}
                >
                    <header>
                        <h2>이번 주 더 시드 1위</h2>
                    </header>
                    <div className="dojang-main">
                        <img
                            className="character-image"
                            alt="character"
                            loading="lazy"
                        />
                        <div>
                            <div className="level">

                            </div>
                            <img
                                className="character-image"
                                alt="character"
                                loading="lazy"
                            />
                            <div className="info">
                                <div className="player">
                                    <span className="name"></span>
                                    <span className="level">Lv. </span>
                                </div>
                                <div className="job">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more">상세 보기</div>
                </section>
                <section
                    className="container achievement"
                    ref={achievementRef}
                    onMouseMove={(e) => MouseMove(e as React.MouseEvent<HTMLDivElement>, achievementRef)}
                    onMouseLeave={() => MouseLeave(achievementRef)}
                >
                    <header>
                        <h2>이번 주 업적 1위</h2>
                    </header>
                    <div className="dojang-main">
                        <img
                            className="character-image"
                            alt="character"
                            loading="lazy"
                        />
                        <div>
                            <div className="level">

                            </div>
                            <img
                                className="character-image"
                                alt="character"
                                loading="lazy"
                            />
                            <div className="info">
                                <div className="player">
                                    <span className="name"></span>
                                    <span className="level">Lv. </span>
                                </div>
                                <div className="job">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more">상세 보기</div>
                </section>
                <section
                    className="container union"
                    ref={unionRef}
                    onMouseMove={(e) => MouseMove(e as React.MouseEvent<HTMLDivElement>, unionRef)}
                    onMouseLeave={() => MouseLeave(unionRef)}
                >
                    <header>
                        <h2>이번 주 무릉도장 1위</h2>
                    </header>
                    <div className="dojang-main">
                        <img
                            className="character-image"
                            alt="character"
                            loading="lazy"
                        />
                        <div>
                            <div className="level">

                            </div>
                            <img
                                className="character-image"
                                alt="character"
                                loading="lazy"
                            />
                            <div className="info">
                                <div className="player">
                                    <span className="name"></span>
                                    <span className="level">Lv. </span>
                                </div>
                                <div className="job">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more">상세 보기</div>
                </section>
            </section>
        </div>
    );
}