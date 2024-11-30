import Accordion from 'react-bootstrap/Accordion';
import '../../styles/careers.css'

function FlushExample() {
    return (
        <Accordion defaultActiveKey="0" flush style={{ width: "100%" }}>
            <Accordion.Item eventKey="0" >
                <Accordion.Header >Marketing Department</Accordion.Header>
                <Accordion.Body>
                    <div className='careers-row-2-content'>
                        <h2>Marketing Specialist</h2>
                        <p>New York</p>
                        <p>We are seeking a talented Marketing Specialist to join our dynamic team in New York. The ideal candidate will have a strong background in digital marketing and a passion for driving results.</p>
                    </div>
                    <div className='careers-row-2-content'>
                        <h2>Graphic Designer</h2>
                        <p>Boston </p>
                        <p>We are looking for a creative Graphic Designer to join our marketing team in Denver. The ideal candidate will have a strong portfolio and a passion for visual storytelling.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Sales Department</Accordion.Header>
                <Accordion.Body>
                    <div className='careers-row-2-content'>
                        <p>New York</p>
                        <p>We are seeking a talented Marketing Specialist to join our dynamic team in New York. The ideal candidate will have a strong background in digital marketing and a passion for driving results.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Operations Department</Accordion.Header>
                <Accordion.Body>
                    <div className='careers-row-2-content'>
                        <p>New York</p>
                        <p>We are seeking a talented Marketing Specialist to join our dynamic team in New York. The ideal candidate will have a strong background in digital marketing and a passion for driving results.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FlushExample;

const styles = {
    header: {
        color: "#000",
        fontSize: "32px", // Correct font size
        fontFamily: "Roboto, sans-serif",
        fontWeight: 700,
        lineHeight: "130%",
    }
};
