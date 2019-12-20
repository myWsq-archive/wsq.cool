import styled from "styled-components";
import theme from "@/theme";
import { LayoutContainer } from "@/containers/Layout";

const SearchPanelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1;
  @media (prefers-color-scheme: dark) {
    background: #191b1f;
  }
`;

const Label = styled.h2`
  font-family: ${theme.fontFamily.title};
  font-weight: 400;
  color: ${theme.colors.gray[700]};
  @media (prefers-color-scheme: dark) {
    color: ${theme.colors.gray[400]};
  }
  strong {
    font-weight: bold;
  }
`;

const CloseButton = styled.i`
  position: absolute;
  right: 5vw;
  top: 5vw;
  color: ${theme.colors.gray[700]};
  @media (prefers-color-scheme: dark) {
    color: ${theme.colors.gray[400]};
  }
  font-size: 2rem;
  cursor: pointer;
`;

const MainContainer = styled.div`
  position: relative;
  top: 15vw;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const SearchInput = styled.div`
  position: relative;
  max-width: calc(100vw - 60px);
  width: 760px;
  margin: 1em auto;
  font-size: 2rem;
  input {
    outline: none;
    background: transparent;
    padding: 0.3em 0.5em;
    font-size: inherit;
    color: ${theme.colors.gray[700]};
    @media (prefers-color-scheme: dark) {
      color: ${theme.colors.gray[400]};
    }
    width: 100%;
    border: 2px solid ${theme.colors.gray[600]};
    padding-right: 2em;
    border-radius: 5px;
    &:focus {
      border-color: ${theme.colors.teal[500]};
    }
    &::placeholder {
      color: ${theme.colors.gray[500]};
      @media (prefers-color-scheme: dark) {
        color: ${theme.colors.gray[700]};
      }
    }
  }
  i {
    position: absolute;
    right: 0.5em;
    top: 50%;
    transform: translateY(-50%) scale(0.7);
    color: ${theme.colors.gray[600]};
    @media (prefers-color-scheme: dark) {
      color: ${theme.colors.gray[500]};
    }
    font-size: inherit;
  }
`;

const SearchPanel: React.FunctionComponent = props => {
  const layout = LayoutContainer.useContainer();

  return (
    <SearchPanelContainer>
      <CloseButton
        className="iconfont icon-close"
        onClick={() => layout.setSearchPanelVisible(false)}
      ></CloseButton>
      <MainContainer>
        <Label>
          Press <strong>ESC</strong> to close
        </Label>
        <SearchInput>
          <input placeholder="Type to start searching"></input>
          <i className="iconfont icon-search"></i>
        </SearchInput>
      </MainContainer>
    </SearchPanelContainer>
  );
};

export default SearchPanel;
