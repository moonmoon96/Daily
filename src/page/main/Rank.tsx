import { useEffect, useState } from "react";
import { overall } from "../../api/rank/overall";
import { RankData } from "../../api/Types";
import { todayDate } from "../../utils/Date";

export default function Rank() {

    const [rank, setRank] = useState<RankData[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const result = await overall(); 
    //             setRank(result);
    //             console.log(rank);
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <article className="home-main-article">
            <h3 className="home-article-h3">
                <div>
                    <span>{todayDate} &nbsp;</span>
                    <b>일반 월드</b>
                    랭킹
                </div>
                <div className="home-article-more">
                    <a href="/">
                        <span>더 보기</span>
                        <img
                            src="https://cdn.dak.gg/maple/images/icon/ico-arrow-right-grey-500.svg"
                            alt="more"
                            loading="lazy"
                        />
                    </a>
                </div>
            </h3>
            <div className="home-article-table">
                <div className="home-article-table-th center">#</div>
                <div className="home-article-table-th">캐릭터</div>
                <div className="home-article-table-th center">레벨</div>
                <div className="home-article-table-th center">직업</div>
                <div className="home-article-table-th center">길드</div>
                {rank.slice(0, 5).map((a, i) => {
                    let rankingClass;
                    if (i === 0) {
                        rankingClass = "first";
                    } else if (i === 1) {
                        rankingClass = "second";
                    } else if (i === 2) {
                        rankingClass = "third";
                    } else {
                        rankingClass = "etc";
                    }

                    return (
                        <>
                            <div className="home-article-table-td" key={i}>
                                <div className={rankingClass}>{a.ranking}</div>
                            </div>
                            <div className="home-article-table-td">
                                <div className="name">
                                    {/* <img alt="world"></img> */}
                                    <a><span>{a.character_name}</span></a>
                                </div>
                            </div>
                            <div className="home-article-table-td center">{a.character_level}</div>
                            <div className="home-article-table-td">
                                <span>{a.sub_class_name || a.class_name}</span>
                            </div>
                            <div className="home-article-table-td responsive">
                                <a>{a.character_guildname || 'X'}</a>
                            </div>
                        </>
                    );
                })}
            </div>
        </article>
    )
}