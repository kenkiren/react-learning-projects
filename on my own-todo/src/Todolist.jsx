function Listhere({todolists}){

return (
    <ul>
        {todolists.map((item, index) => (
            <li key={index}>{item.text}</li>
        ))}
    </ul>
)
}
export default Listhere;
