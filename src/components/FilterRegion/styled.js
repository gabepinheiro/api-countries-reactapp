import styled from 'styled-components';

const FilterContainer = styled.div`
  width:200px;
  position: relative;
  background: var(--color-base);
  font-size: 14px;
  color: var(--color-dark);
  font-weight:600;

  & > button {
    background:transparent;
    width:100%;
    height:55px;
    line-height: 55px;
    box-shadow: var(--box-shadow);
    border-radius: 5px;
    border:0;
    color: var(--color-dark);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    font-weight:600;
    cursor:pointer;
  }

  & > ul{
    width:100%;
    background: var(--color-base);
    box-shadow: var(--box-shadow);
    border-radius: 5px;
    position: absolute;
    z-index:1;
    top:58px;
    padding:20px;
  }

  & > ul > li {
    margin-bottom: 10px;
  }
`;

export default FilterContainer;