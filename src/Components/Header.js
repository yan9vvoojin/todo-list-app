import styled from 'styled-components';

const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #EEEEEE;
  background-color: #1675D3;
  width: 100%;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Head>My Todo List</Head>
  );
};

export default Header;
