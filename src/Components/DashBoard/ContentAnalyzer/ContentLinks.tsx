import React from "react";
import styled from "styled-components";
import ContentNavigation from "./ContentNavigation";

interface TableDataItem {
	column1: string;
	column2: string;
	column3: string;
	column4: string;
	column5: string;
}

const TableContainer = styled.div`
	overflow-x: auto;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	background-color: white;
	overflow-x: scroll;

	tbody > tr:nth-child(odd) {
		background-color: #fafafc;
	}
`;

const Th = styled.th`
	padding: 8px;
	text-align: left;
	border-bottom: 1px solid #ddd;
	border-right: 1px solid #ddd;
`;

const Td = styled.td`
	padding: 8px;
	text-align: left;
	border-right: 1px solid #ddd;
	white-space: pre-wrap;
	word-wrap: break-word;

	&:last-child {
		border-right: none;
	}
`;

const ContentLinks = () => {
	const data: TableDataItem[] = [
		{
			column1: "https://www.seoreviewtools.com/seo-content-editor",
			column2: "Data 1",
			column3: "Value 1",
			column4: "value4",
			column5: "Search Engine Land",
		},
		{
			column1: "Row 2",
			column2: "Data 2",
			column3: "Value 2",
			column4: "value4",
			column5: "value5",
		},
		{
			column1: "Row 3",
			column2: "Data 3",
			column3: "Value 3",
			column4: "value4",
			column5: "value5",
		},
		{
			column1: "Row 3",
			column2: "Data 3",
			column3: "Value 3",
			column4: "value4",
			column5: "value5",
		},
		{
			column1: "Row 3",
			column2: "Data 3",
			column3: "Value 3",
			column4: "value4",
			column5: "value5",
		},
		// Add more data items as needed
	];
	return (
		<Container>
			<ContentNavigation />
			<Wrapper>
				<Main>
					<InputText>Search Keyword</InputText>
					<Input2>
						<Input3
							// value={googleKeywords}
							required={true}
							placeholder='Enter search'
							type='search'
						/>
						<Button>Search</Button>
					</Input2>
				</Main>

				<BoxesDiv>
					<MainBox>
						<TopBox>
							<Toptitle>Analysis Data</Toptitle>
							<TopSub>0</TopSub>
						</TopBox>
						<ButtomBoxHold>
							<TomBox>
								<ButtomTitle>Blogs</ButtomTitle>
								<TomSub>0</TomSub>
							</TomBox>
							<TomBox>
								<ButtomTitle>Ecomerce</ButtomTitle>
								<TomSub>0</TomSub>
							</TomBox>
							<TomBox>
								<ButtomTitle>News</ButtomTitle>
								<TomSub>0</TomSub>
							</TomBox>
						</ButtomBoxHold>
					</MainBox>
					<MiddleBox>
						<InnerMidBox>
							<InnerTitle>Item Count</InnerTitle>
							<InnerSub>0</InnerSub>
						</InnerMidBox>
						<InnerMidBox>
							<InnerTitle>Page Type</InnerTitle>
							<InnerSub>0</InnerSub>
						</InnerMidBox>
					</MiddleBox>
					<MainBox>
						<MainTop>
							<Toptitle>Domain Rank</Toptitle>
							<TopSub>0</TopSub>
						</MainTop>
						<MainButtom>
							<RateBox>
								<RateBar>
									<RateBar2 />
								</RateBar>
							</RateBox>
							<RateData>
								<DataRate>
									<RateTitle>URL Rank</RateTitle>
									{/* <RateSub>78</RateSub> */}
								</DataRate>
								<DataRate>
									<RateTitle>Spam Score</RateTitle>
									{/* <RateSub>22</RateSub> */}
								</DataRate>
							</RateData>
						</MainButtom>
					</MainBox>
				</BoxesDiv>

				<br />
				<br />
				<TableTitle>
					<span>On Page Links </span>
				</TableTitle>
				<TableContainer>
					<Table>
						<thead>
							<tr>
								<Th>Url</Th>
								<Th>Link type</Th>
								<Th>Nofollow </Th>
								<Th>
									Anchor
									<br /> type
								</Th>
								<Th>Anchor text</Th>
							</tr>
						</thead>
						<tbody>
							{data.map((item, index) => (
								<tr key={index}>
									<Td>{item.column1}</Td>
									<Td>{item.column2}</Td>
									<Td>{item.column3}</Td>
									<Td>{item.column4}</Td>
									<Td>{item.column5}</Td>
								</tr>
							))}
						</tbody>
					</Table>
				</TableContainer>
			</Wrapper>
		</Container>
	);
};

export default ContentLinks;

const RateBar = styled.div`
	height: 6px;
	width: 100%;
	background-color: #f49867;
	margin-bottom: 15px;
	border-radius: 10px;
`;
const RateBar2 = styled.div`
	width: 70%;
	height: 6px;
	border-radius: 10px;
	background-color: #ae67fa;
`;
const MainTop = styled.div``;
const MainButtom = styled.div``;
const RateBox = styled.div``;
const RateData = styled.div`
	display: flex;
	justify-content: space-between;
`;
const DataRate = styled.div``;
const RateTitle = styled.div`
	font-size: 9px;
	font-weight: 600;
	margin-bottom: 15px;
`;

const BoxesDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
 
`;
const MainBox = styled.div`
	height: 200px;
	width: 350px;
	background-color: #fff;
	margin: 10px 0;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const TopBox = styled.div``;

const Toptitle = styled.div`
	font-size: 13px;
	font-weight: 600;
	margin-bottom: 20px;
`;
const TopSub = styled.div`
	font-size: 25px;
	font-weight: 800;
`;
const ButtomBoxHold = styled.div`
	display: flex;
	justify-content: space-between;
`;
const TomBox = styled.div``;
const ButtomTitle = styled.div`
	font-size: 9px;
	font-weight: 600;
	margin-bottom: 15px;
`;
const TomSub = styled.div`
	font-size: 18px;
	font-weight: 800;
`;
const MiddleBox = styled.div``;
const InnerMidBox = styled.div`
	height: 90px;
	width: 250px;
	background-color: #fff;
	margin: 10px;
	padding: 10px;
`;

const InnerTitle = styled.div`
	font-size: 13px;
	font-weight: 600;
	margin-bottom: 30px;
`;
const InnerSub = styled.div`
	font-size: 25px;
	font-weight: 800;
`;

const TableTitle = styled.div`
	width: 100%;
	height: 60px;
	background-color: white;
	display: flex;
	margin-bottom: 10px;

	border-radius: 5px;
	align-items: center;
	span {
		margin-left: 20px;
		font-size: 20px;
		font-weight: 500;
		color: #ae67fa;
	}
`;

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
	font-family: Montserrat;
`;
const Input2 = styled.div`
	height: 35px;
	width: 98%;
	background-color: white;
	border: 1px solid #e2e2e2;
	border-radius: 2px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
const Button = styled.button`
	margin-right: 3px;
	height: 32px;
	width: 150px;
	color: white;
	border: none;
	outline: none;
	border-radius: 2px;
	cursor: pointer;
	background-color: #ae67fa;
	font-weight: 600;
	font-size: 12px;

	:disabled {
		background-color: silver;
		cursor: not-allowed;
	}
`;

const Main = styled.div`
	width: 100%;
	margin-top: 10px;
	margin-right: 40px;
`;

const InputText = styled.div`
	font-size: 12px;
	margin-bottom: 3px;
	font-weight: 600;
	/* font-weight: 600; */
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
	width: 95%;
`;

const Container = styled.div`
	width: calc(100vw - 240px);
	min-height: calc(100vh - 60px);
	display: flex;
	overflow: hidden;

	/* justify-content: space-between; */
	/* align-items: center; */
	flex-direction: column;
	background-color: #f8f8ff;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
	/* flex-direction: column; */
`;
