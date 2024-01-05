import { Container } from "react-bootstrap";

const Footer = () => {

  return (

    <footer style={{

        position: "absolute",

        bottom: 0,

        width: "100%",

        height: "56px",

        backgroundColor: "#212529",

        lineHeight: "56px"

    }}>

        <Container>

            <p className="text-center" style={{ color: "white", letterSpacing: "1px" }}>
                
                All Rights Reserved By 
                
                <a className="text-decoration-none" href="#"> Alhiane Lahcen </a>
                
                In 2023
                
            </p>

        </Container>

    </footer>

  );

}

export default Footer;
