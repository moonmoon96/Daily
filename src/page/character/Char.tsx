import Header from "../../component/Header";

export default function char () {
    return(
        <>
            <Header />
            <div className="char">
                <div className="char-top">
                    <div className="char-top start">
                        <div className="char-top date">
                            <span>최근접속일</span>
                            <span>생성일</span>
                        </div>
                        <div className="char-top bg">
                            <div>
                                <img></img>
                            </div>
                        </div>
                        <div className="char-top section">
                            <div className="char-top char item">
                                <div className="char-top charimg">
                                    <div className="char-top aximg">
                                        <div>
                                            <img loading="lazy"></img>
                                        </div>
                                    </div>
                                    <div className="char-top aximgdate">
                                        <button>날짜</button>
                                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="char-top info item">
                                <div className="char-top box">
                                    <div className="char-top world">
                                        <div>
                                            <span>서버</span>
                                        </div>
                                        <div>
                                            <span>직업</span>
                                        </div>
                                    </div>
                                    <div className="char-top name">
                                        <div className="char-top title">
                                            <div className="char-top charname">
                                                <img></img>
                                                <h4>캐릭터 닉네임</h4>
                                            </div>
                                            <button>
                                            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                                            </svg>
                                            </button>
                                        </div>
                                        <div className="char-top charspec">
                                            <p className="char-top firstp">
                                                <span>길드</span>
                                                <a></a>
                                            </p>
                                            <p className="char-top p">
                                                <span>인기도</span>
                                            </p>
                                            <p className="char-top p">
                                                <span>종합랭킹</span>
                                            </p>
                                            <p className="char-top p">
                                                <span>직업랭킹</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="char-top level">
                                        <div>
                                            <p>레벨</p>
                                            <h5></h5>
                                        </div>
                                        <div>
                                            <p>유니온</p>
                                            <h5></h5>
                                        </div>
                                        <div>
                                            <p>전투력</p>
                                            <h5></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}