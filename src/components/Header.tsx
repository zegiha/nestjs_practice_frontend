import styled from "styled-components";
import {Link} from "react-router-dom";
import {Row} from "./atomic";

const Header = () => {
	return (
		<Container>
			<Wrapper>
				<Link to={"/"}>
					글 보기
				</Link>
				
				<Row gap={20}>
					{/* <Link to={"/:noticeTitle"}>
						글 검색하기
					</Link> */}
					<Link to={"/create/notice"}>
						글 쓰기
					</Link>
				</Row>
			</Wrapper>
		</Container>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 1200px;
  width: calc(100% - 240px);
	height: 100%;
	align-items: center;
  @media (max-width: 720px) {
    padding: 0 40px;
    width: calc(100% - 80px);
  }
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 60px;
	position: sticky;
	top: 0;
`;

export default Header;