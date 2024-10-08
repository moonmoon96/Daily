import { useEffect, useRef, useState } from "react";
import { ocid } from "../../api/character/Ocid";
import { basic } from "../../api/character/Basic";
import { dojang } from "../../api/rank/Dojang";
import { theseed } from "../../api/rank/Theseed";
import { AchievementData, DojangData, TheseedData, UnionData } from "../../api/Types";
import { formatTime } from "../../utils/Time";
import { achievement } from "../../api/rank/Achievement";
import { union } from "../../api/rank/Union";

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
            const overlay = ref
                .current.querySelector('.overlay') as HTMLDivElement;
            if (overlay) {
                // 마우스가 요소 안에 있는지 체크
                const isHovered = e.clientX >= rect.left && e.clientX <= rect.right &&
                    e.clientY >= rect.top && e.clientY <= rect.bottom;

                // hover 상태에 따라 스타일 변경
                overlay.style.backgroundPosition = `${x / 6 + y / 6}%`;
                overlay.style.visibility = isHovered ? 'visible' : 'hidden';
                overlay.style.opacity = isHovered ? '1' : '0';
            }
            ref.current.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };

    const MouseLeave = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const overlay = ref.current.querySelector('.overlay') as HTMLDivElement;
            if (overlay) {
                overlay.style.visibility = 'hidden';
            }
            ref.current.style.transform = 'perspective(400px) rotateX(0deg) rotateY(0deg)';
        }
    };

    const [dojangData, setDojangData] = useState<DojangData[]>([]);
    const [theseedData, setTheSeedData] = useState<TheseedData[]>([]);
    const [achievementData, setAchievementData] = useState<AchievementData[]>([]);
    const [unionData, setUnionData] = useState<UnionData[]>([]);

    const [dojangCharacterImage, setDojangCharacterImage] = useState();
    const [theseedCharacterImage, setTheseedCharacterImage] = useState();
    const [achievementCharacterImage, setAchievementCharacterImage] = useState();
    const [unionCharacterImage, setUnionCharacterImage] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // 데이터 로딩 시작
            try {
                const dojang_result = await dojang();
                setDojangData(dojang_result);

                const dojang_character_name = dojang_result[0]?.character_name;

                if (dojang_character_name) {
                    try {
                        const result = await ocid(dojang_character_name);

                        const basic_data = await basic(result);
                        setDojangCharacterImage(basic_data.character_image);

                    } catch (err) {
                        console.log(err);
                    }
                }

                const theseed_result = await theseed();
                setTheSeedData(theseed_result);

                const theseed_character_name = theseed_result[0]?.character_name;

                if (theseed_character_name) {
                    try {
                        const result = await ocid(theseed_character_name);

                        const basic_data = await basic(result);
                        setTheseedCharacterImage(basic_data.character_image);

                    } catch (err) {
                        console.log(err);
                    }
                }

                const achievement_result = await achievement();
                setAchievementData(achievement_result);

                const achievement_character_name = achievement_result[0]?.character_name;

                if (achievement_character_name) {
                    try {
                        const result = await ocid(achievement_character_name);

                        const basic_data = await basic(result);
                        setAchievementCharacterImage(basic_data.character_image);

                    } catch (err) {
                        console.log(err);
                    }
                }

                const union_result = await union();
                setUnionData(union_result);

                const union_character_name = union_result[0]?.character_name;

                if (union_character_name) {
                    try {
                        const result = await ocid(union_character_name);

                        const basic_data = await basic(result);
                        setUnionCharacterImage(basic_data.character_image);

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

        //fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <section className="home-main-first">
                <section
                    className="container dojang"
                    ref={dojangRef}
                    onMouseMove={(e) => MouseMove(e as React.MouseEvent<HTMLDivElement>, dojangRef)}
                    onMouseLeave={() => MouseLeave(dojangRef)}
                >
                    <div className="overlay"></div>
                    <header>
                        <h2>이번 주 무릉도장 1위</h2>
                    </header>
                    <div className="dojang-main">
                        {dojangData.length > 0 && (
                            <>
                                <img
                                    className="character-image"
                                    src={dojangCharacterImage}
                                    alt="character"
                                    loading="lazy"
                                />
                                <div>
                                    <div className="level">
                                        <div>
                                            <b>{dojangData[0].dojang_floor}층</b>
                                        </div>
                                        <span>{formatTime(dojangData[0].dojang_time_record)}</span>
                                    </div>
                                    <img
                                        className="character-image"
                                        src={dojangCharacterImage}
                                        alt="character"
                                        loading="lazy"
                                    />
                                    <div className="info">
                                        <div className="player">
                                            <span className="name">{dojangData[0].character_name}</span>
                                            <span className="level">Lv.{dojangData[0].character_level}</span>
                                        </div>
                                        <div className="job">
                                            {dojangData[0].sub_class_name || dojangData[0].class_name}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="more">상세 보기</div>
                </section>
                <section
                    className="container theseed"
                    ref={theseedRef}
                    onMouseMove={(e) => MouseMove(e as React.MouseEvent<HTMLDivElement>, theseedRef)}
                    onMouseLeave={() => MouseLeave(theseedRef)}
                >
                    <div className="overlay"></div>
                    <header>
                        <h2>이번 주 더 시드 1위</h2>
                    </header>
                    <div className="dojang-main">
                        {theseedData.length > 0 && (
                            <>
                                <img
                                    className="character-image"
                                    src={theseedCharacterImage}
                                    alt="character"
                                    loading="lazy"
                                />
                                <div>
                                    <div className="level">
                                        <div>
                                            <b>{theseedData[0].theseed_floor}층</b>
                                        </div>
                                        <span>{formatTime(theseedData[0].theseed_time_record)}</span>
                                    </div>
                                    <img
                                        className="character-image"
                                        src={theseedCharacterImage}
                                        alt="character"
                                        loading="lazy"
                                    />
                                    <div className="info">
                                        <div className="player">
                                            <span className="name">{theseedData[0].character_name}</span>
                                            <span className="level">Lv.{theseedData[0].character_level}</span>
                                        </div>
                                        <div className="job">
                                            {theseedData[0].sub_class_name || theseedData[0].class_name}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="more">상세 보기</div>
                </section>
                <section
                    className="container achievement"
                    ref={achievementRef}
                    onMouseMove={(e) => MouseMove(e as React.MouseEvent<HTMLDivElement>, achievementRef)}
                    onMouseLeave={() => MouseLeave(achievementRef)}
                >
                    <div className="overlay"></div>
                    <header>
                        <h2>이번 주 업적 1위</h2>
                    </header>
                    <div className="dojang-main">
                        {achievementData.length > 0 && (
                            <>
                                <img
                                    className="character-image"
                                    src={achievementCharacterImage}
                                    alt="character"
                                    loading="lazy"
                                />
                                <div>
                                    <div className="level">
                                        <div>
                                            <b>{achievementData[0].trophy_grade}</b>
                                        </div>
                                        <span>{achievementData[0].trophy_score}</span>
                                    </div>
                                    <img
                                        className="character-image"
                                        src={achievementCharacterImage}
                                        alt="character"
                                        loading="lazy"
                                    />
                                    <div className="info">
                                        <div className="player">
                                            <span className="name">{achievementData[0].character_name}</span>
                                            <span className="level">Lv.{achievementData[0].character_level} </span>
                                        </div>
                                        <div className="job">
                                            {achievementData[0].sub_class_name || achievementData[0].class_name}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="more">상세 보기</div>
                </section>
                <section
                    className="container union"
                    ref={unionRef}
                    onMouseMove={(e) => MouseMove(e as React.MouseEvent<HTMLDivElement>, unionRef)}
                    onMouseLeave={() => MouseLeave(unionRef)}
                >
                    <div className="overlay"></div>
                    <header>
                        <h2>이번 주 유니온 1위</h2>
                    </header>
                    <div className="dojang-main">
                        {unionData.length > 0 && (
                            <>
                                <img
                                    className="character-image"
                                    src={unionCharacterImage}
                                    alt="character"
                                    loading="lazy"
                                />
                                <div>
                                    <div className="level">
                                        <div>
                                            <b>{unionData[0].union_level}</b>
                                        </div>
                                        <span>{unionData[0].union_power}</span>
                                    </div>
                                    <img
                                        className="character-image"
                                        src={unionCharacterImage}
                                        alt="character"
                                        loading="lazy"
                                    />
                                    <div className="info">
                                        <div className="player">
                                            <span className="name">{unionData[0].character_name}</span>
                                            <span className="level">Lv.{unionData[0].character_level} </span>
                                        </div>
                                        <div className="job">
                                            {unionData[0].sub_class_name || unionData[0].class_name}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="more">상세 보기</div>
                </section>
            </section>
        </div>
    );
}