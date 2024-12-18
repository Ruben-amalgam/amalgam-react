import Accordion from 'react-bootstrap/Accordion';
import '../../styles/careers.css'
import './accordionfaq.css'

function FlushExample() {
    return (
        <Accordion  flush style={{ width: "100%"  }}>
            <Accordion.Item eventKey="0" >
                <Accordion.Header>What is business consulting?</Accordion.Header>
                <Accordion.Body>
                    <div className='accordion-content '>
                        <h2>What is business consulting?</h2>
                        <p>New York</p>
                        <p>We are seeking a talented Marketing Specialist to join our dynamic team in New York. The ideal candidate will have a strong background in digital marketing and a passion for driving results.</p>
                    </div>
                    <div className='accordion-content'>
                        <h2>Graphic Designer</h2>
                        <p>Boston </p>
                        <p>We are looking for a creative Graphic Designer to join our marketing team in Denver. The ideal candidate will have a strong portfolio and a passion for visual storytelling.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What are bespoke tech solutions</Accordion.Header>
                <Accordion.Body>
                    <div className='accordion-content'>
                        <p>New York</p>
                        <p>We are seeking a talented Marketing Specialist to join our dynamic team in New York. The ideal candidate will have a strong background in digital marketing and a passion for driving results.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What is an entrepreneurial hub?</Accordion.Header>
                <Accordion.Body>
                    <div className='accordion-content'>
                        <p>New York</p>
                        <p>We are seeking a talented Marketing Specialist to join our dynamic team in New York. The ideal candidate will have a strong background in digital marketing and a passion for driving results.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>How can I contact you?</Accordion.Header>
                <Accordion.Body>
                    <div className='accordion-content'>
                        <p>New York</p>
                        <p>We are seeking a talented Marketing Specialist to join our dynamic team in New York. The ideal candidate will have a strong background in digital marketing and a passion for driving results.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>How long does it take to receive a response?

                </Accordion.Header>
                <Accordion.Body>
                    <div className='accordion-content'>
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
