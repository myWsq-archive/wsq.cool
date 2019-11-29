import styled from "styled-components";

const SearchPanelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1;
`;

const SearchPanel: React.FunctionComponent = props => {
  return <SearchPanelContainer>Search</SearchPanelContainer>;
};

export default SearchPanel;
