import { useRef } from "react";

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
            const rotateY = -1 / 5 * x + 20;
            const rotateX = 4 / 30 * y - 19;
            // console.log(`MouseMove - x: ${x}, y: ${y}, rotateX: ${rotateX}, rotateY: ${rotateY}`);
            ref.current.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };

    const MouseLeave = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.style.transform = 'perspective(400px) rotateX(0deg) rotateY(0deg)';
        }
    };

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
                    onMouseMove={(e) => MouseMove(e as React.MouseEvent<HTMLDivElement>,unionRef)}
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