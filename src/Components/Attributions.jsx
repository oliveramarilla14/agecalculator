

function Attributions() {
  const attribution = { fontSize: "11px", textAlign: "center",marginTop:"20px"}  
  const anchor = { color: "hsl(228, 45%, 44%)"}

    return ( 
        <div style={attribution}>
        Challenge by <a style={anchor} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a style={anchor} href="#">Oliver Amarilla</a>.
      </div>
     )
}

export default Attributions;