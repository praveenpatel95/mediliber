export default function Logo({height}){
    return (
        <img src={`${process.env.PUBLIC_URL}/mediliber-logo.png`} style={{height:height}} />
    )
}