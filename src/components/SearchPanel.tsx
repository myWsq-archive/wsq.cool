import styled from "styled-components";
import theme from "@/theme";

const SearchPanelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1;
`;

const Label = styled.h2`
  font-family: ${theme.fontFamily.title};
  font-weight: 400;
  color: ${theme.colors.gray[700]};
  strong {
    font-weight: bold;
  }
`;

const CloseButton = styled.button``;

const SearchPanel: React.FunctionComponent = props => {
  return (
    <SearchPanelContainer>
      <Label>
        Press <strong>ESC</strong> to close
      </Label>
    </SearchPanelContainer>
  );
};

export default SearchPanel;
