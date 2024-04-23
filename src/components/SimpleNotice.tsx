import styled from "styled-components";
import {Col, Contents, Row, Title} from "./atomic";
import {Link} from "react-router-dom";

interface SimpleNoticeInterface{
	title: string;
	contents: string;
	author: string;
	date: string;
}

const SimpleNotice = ({title, contents, author, date}: SimpleNoticeInterface) => {
	return (
		<Container to={`/notice/${title}`} state={{title, contents, author, date}}>
			<Row
				justify={"space-between"}
				align={"baseline"}
			>
				<Col gap={8}>
					<Title>
						{title}
					</Title>
					<Contents width={360}>
						{contents}
					</Contents>
				</Col>
				<Col gap={12} align={"end"}>
					<Contents>
						{author}
					</Contents>
					<Contents>
						{date}
					</Contents>
				</Col>
			</Row>
		</Container>
	);
};

const Container = styled(Link)`
	padding: 32px 0;
`;

export default SimpleNotice;