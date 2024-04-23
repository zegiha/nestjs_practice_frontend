import {Fragment} from 'react';
import SimpleNotice from "../components/SimpleNotice";

const contents = "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"

const Home = () => {
	return (
		<Fragment>
			<SimpleNotice title={"제목"} contents={contents} author={"글쓴이"} date={"2024-04-14"}/>
		</Fragment>
	);
};

export default Home;