import styled from "styled-components";

interface RowCol {
	gap?: number;
	justify? :string;
	align?: string;
}

const Row = styled.div<RowCol>`
	display: flex;
	justify-content: ${p => p.justify && p.justify};
  align-items: ${p => p.align && p.align};
	gap: ${p => p.gap && `${p.gap}px`};
`;

const Col = styled.div<RowCol>`
  display: flex;
	flex-direction: column;
  justify-content: ${p => p.justify && p.justify};
  align-items: ${p => p.align && p.align};
  gap: ${p => p.gap && `${p.gap}px`};
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 40px;
	color: black;
`;
const Contents = styled.div<{width?: number;}>`
	font-weight: 500;
	font-size: 22px;
	color: black;
	
	${(p) => p.width && `
	width: ${p.width}px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	`}
`;

export {Row, Col, Title, Contents}