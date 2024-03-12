export default function TabButton({children}) {
    function clickHandler() {
        console.log("Hello World!");
    }
    return (
        <li><button onClick={clickHandler}>{children}</button></li>
    )
}