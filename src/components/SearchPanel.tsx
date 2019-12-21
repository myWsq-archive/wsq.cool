import styled from "styled-components";
import theme from "@/theme";
import { LayoutContainer } from "@/containers/Layout";
import { useState } from "react";
import _debounce from "lodash/debounce";
import { searchDocs, SearchDocItem } from "@/services/post";
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
  top: 10vh;
  left: 50%;
  height: 90vh;
  transform: translateX(-50%);
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInput = styled.div`
  position: relative;
  margin: 1em;
  font-size: 1.5rem;
  width: calc(100% - 2rem);
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

const SearchResultContainer = styled.div`
  margin-top: 2rem;
  flex: 1;
  width: 100%;
  line-height: 1.5;
  overflow: auto;
  padding: 0 1rem;
  cursor: pointer;
`;

const SearchItem = styled.div`
  padding: 1rem 0;
  h4 {
    margin-bottom: 0.8em;
    color: ${theme.colors.gray[900]};
    font-family: ${theme.fontFamily.title};
    @media (prefers-color-scheme: dark) {
      color: ${theme.colors.gray[400]};
    }
  }
  p {
    color: ${theme.colors.gray[600]};
    @media (prefers-color-scheme: dark) {
      color: ${theme.colors.gray[500]};
    }
  }

  em {
    font-style: normal;
    color: ${theme.colors.red[600]};
    padding: 0 0.1em;
    @media (prefers-color-scheme: dark) {
      color: ${theme.colors.red[500]};
    }
  }
`;

const SearchPanel: React.FunctionComponent = props => {
  const layout = LayoutContainer.useContainer();

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchDocItem[]>([]);
  const [text, setText] = useState("");
  async function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setText(value);
    if (value) {
      setLoading(true);
      const results = await searchDocs(e.target.value);
      setResults(results);
      setLoading(false);
    }
  }

  const onSearchDebounce = _debounce(onSearch, 300);

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
          <input
            autoFocus
            placeholder="Type to start searching"
            onChange={e => {
              e.persist();
              onSearchDebounce(e);
            }}
            onKeyUp={e => {
              if (e.key === "Escape") {
                layout.setSearchPanelVisible(false);
              }
            }}
          ></input>
          <i className="iconfont icon-search"></i>
        </SearchInput>
        {loading ? (
          <Label>Searching...</Label>
        ) : (
          text && <Label>{results.length} results for your search</Label>
        )}
        {!loading && text && (
          <SearchResultContainer>
            {results.map(item => (
              <a key={item.slug} href={`/post/${item.slug}`}>
                <SearchItem>
                  <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                  <p dangerouslySetInnerHTML={{ __html: item.abstract }}></p>
                </SearchItem>
              </a>
            ))}
          </SearchResultContainer>
        )}
      </MainContainer>
    </SearchPanelContainer>
  );
};

export default SearchPanel;
