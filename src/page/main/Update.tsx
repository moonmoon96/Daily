export default function Update () {
    return(
        <article className="home-update-article">
            <h3 className="home-article-h3">
                <div>
                    <b>업데이트</b>
                    정보
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
            <div className="home-update-table">
                <div className="home-update-badge">
                    <div className="badge-text">
                        본섭
                    </div>
                </div>
                <div className="home-update-title">
                    <span>
                        <a></a>
                    </span>
                </div>
            </div>
        </article>
    )
}