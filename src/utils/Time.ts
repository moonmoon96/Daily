export const formatTime = (sec : number) => {
    const minute = Math.floor(sec / 60);
    const second = sec % 60;
    return `${minute}분 ${second}초`;
}