import { Fragment, useEffect, useState } from 'react';
import SimpleNotice from "../components/SimpleNotice";

const contents = "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"

interface Data {
	message: string,
}

const Home = () => {
	const [data, setData] = useState<Data | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("http://localhost:8000/");
				const tmp = await res.json();
				setData(tmp);
				console.log(tmp);
			}
			catch(error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<Fragment>
			<SimpleNotice title={"제목"} contents={contents} author={"글쓴이"} date={"2024-04-14"}/>
			{data && (
				<h1>{data.message}</h1>
			)}
		</Fragment>
	);
};

export default Home;