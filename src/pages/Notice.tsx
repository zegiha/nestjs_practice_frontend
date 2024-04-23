import {Col, Contents, Row, Title} from "../components/atomic";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

const Notice = () => {
	const {state} = useLocation();
	
	return (
		<>
			<Top>
				<Row
					justify={"space-between"}
					align={"center"}
				>
					<Title>
						{state.title}
					</Title>
					<Col gap={12} align={"end"}>
						<Contents>
							{state.author}
						</Contents>
						<Contents>
							{state.date}
						</Contents>
					</Col>
				</Row>
			</Top>
			<Contents>{state.contents}</Contents>
		</>
	);
};

const Top = styled.div`
	padding: 32px 0;
`;
export default Notice;