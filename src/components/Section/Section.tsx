import React, { LegacyRef, PropsWithChildren } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeaderBar from "../SectionHeaderBar/SectionHeaderBar";
import Card from "../Card/Card";

interface ISectionProps {
    title: string;
}

export const Section = React.forwardRef((props: PropsWithChildren<ISectionProps>, ref): JSX.Element => {
    const { title, children } = props;

    return <>
        <div ref={ref as LegacyRef<HTMLDivElement>}>
            <SectionHeaderBar id={title.toLowerCase()} title={title.toUpperCase()} />
        </div>
        <Container className="my-4">
            <Row>
                <Col xs={12}>
                    <Card>
                        {children}
                    </Card>
                </Col>
            </Row>
        </Container>
    </>;
});