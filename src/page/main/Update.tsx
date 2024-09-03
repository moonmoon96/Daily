import { useEffect, useState } from "react"
import { updateData } from "../../api/notice/Update";
import { UpdateData } from "../../api/Types";

export default function Update () {
    
    const [update, setUpdate] = useState<UpdateData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await updateData();
                setUpdate(result);
                console.log(update);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return(
        <article className="home-update-article">
            <h3 className="home-article-h3">
                <div>
                    <b>업데이트</b>
                    정보
                </div>
                <div className="home-article-more">
                    <a href="https://maplestory.nexon.com/News/Update"  target="_blank" rel="noopener noreferrer">
                        <span>더 보기</span>
                        <img
                            src="https://cdn.dak.gg/maple/images/icon/ico-arrow-right-grey-500.svg"
                            alt="more"
                            loading="lazy"
                        />
                    </a>
                </div>
            </h3>
            <div className="home-update-table">
                {update.slice(0, 5).map((a, i) => (
                    <>
                        <div className="home-update-badge" key={i}>
                            <div className="badge-text">
                                본섭
                            </div>
                        </div>
                        <div className="home-update-title">
                            <span>
                                <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a>
                            </span>
                        </div>
                    </>
                ))}
            </div>
        </article>
    )
}