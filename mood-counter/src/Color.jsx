function Colors(props){
    const Colours=[
        "red",
        "blue",
        "green"
    ];
return (
<>
<div>
    <ul>
        {Colours.map((item)=>(
            <li>{item}</li>
        ))}
    </ul>
</div>
</>)}
export default Colors;