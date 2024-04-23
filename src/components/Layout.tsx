import {Fragment} from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Header from "./Header";

const Layout = () => {
	return (
		<Fragment>
			<Header/>
			<Container>
				<Wrapper>
					<Outlet/>
				</Wrapper>
			</Container>
		</Fragment>

	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: calc(100% - 240px);
	margin-top: 60px;
	padding: 0 120px;
	@media (max-width: 720px) {
		padding: 0 40px;
    width: calc(100% - 80px);
	}
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	width: 100%;
`;

export default Layout;